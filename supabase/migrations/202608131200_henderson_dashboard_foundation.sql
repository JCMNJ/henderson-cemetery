create extension if not exists pgcrypto;

create or replace function public.henderson_set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end
$$;

create table if not exists public.henderson_user_roles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  role text not null check (role in ('admin', 'editor')),
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists henderson_user_roles_email_idx
  on public.henderson_user_roles (lower(email));

create index if not exists henderson_user_roles_active_role_idx
  on public.henderson_user_roles (is_active, role);

drop trigger if exists henderson_user_roles_set_updated_at on public.henderson_user_roles;
create trigger henderson_user_roles_set_updated_at
before update on public.henderson_user_roles
for each row execute function public.henderson_set_updated_at();

create table if not exists public.henderson_content_items (
  id uuid primary key default gen_random_uuid(),
  content_type text not null check (content_type in ('announcement', 'event')),
  title text not null,
  body text,
  tone text not null default 'standard' check (tone in ('standard', 'urgent', 'support')),
  status text not null default 'draft' check (status in ('draft', 'scheduled', 'published', 'expired', 'archived')),
  publish_at timestamptz,
  expires_at timestamptz,
  event_starts_at timestamptz,
  event_ends_at timestamptz,
  event_location text,
  action_label text,
  action_href text,
  created_by uuid references auth.users(id) on delete set null,
  updated_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint henderson_content_items_event_start_required
    check (content_type = 'announcement' or event_starts_at is not null),
  constraint henderson_content_items_event_end_after_start
    check (event_ends_at is null or event_starts_at is null or event_ends_at >= event_starts_at),
  constraint henderson_content_items_expiration_after_publish
    check (expires_at is null or publish_at is null or expires_at > publish_at)
);

create index if not exists henderson_content_public_active_idx
  on public.henderson_content_items (status, publish_at, expires_at, updated_at desc)
  where status = 'published';

create index if not exists henderson_content_dashboard_sort_idx
  on public.henderson_content_items (status, updated_at desc);

create index if not exists henderson_content_type_status_idx
  on public.henderson_content_items (content_type, status, updated_at desc);

create index if not exists henderson_content_event_starts_idx
  on public.henderson_content_items (event_starts_at)
  where content_type = 'event';

drop trigger if exists henderson_content_items_set_updated_at on public.henderson_content_items;
create trigger henderson_content_items_set_updated_at
before update on public.henderson_content_items
for each row execute function public.henderson_set_updated_at();

create table if not exists public.henderson_audit_events (
  id uuid primary key default gen_random_uuid(),
  content_item_id uuid references public.henderson_content_items(id) on delete set null,
  actor_id uuid references auth.users(id) on delete set null,
  actor_email text,
  event_type text not null check (event_type in ('create', 'update', 'publish', 'unpublish', 'archive', 'duplicate', 'reschedule')),
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index if not exists henderson_audit_content_created_idx
  on public.henderson_audit_events (content_item_id, created_at desc);

create index if not exists henderson_audit_actor_created_idx
  on public.henderson_audit_events (actor_id, created_at desc);

alter table public.henderson_user_roles enable row level security;
alter table public.henderson_content_items enable row level security;
alter table public.henderson_audit_events enable row level security;

create or replace function public.henderson_current_role()
returns text
language sql
stable
security definer
set search_path = public
as $$
  select role
  from public.henderson_user_roles
  where user_id = auth.uid()
    and is_active = true
  limit 1
$$;

create or replace function public.henderson_is_active_dashboard_user()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select public.henderson_current_role() in ('admin', 'editor')
$$;

create or replace function public.henderson_is_dashboard_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select public.henderson_current_role() = 'admin'
$$;

drop policy if exists henderson_user_roles_admin_all on public.henderson_user_roles;
create policy henderson_user_roles_admin_all
  on public.henderson_user_roles
  for all
  to authenticated
  using (public.henderson_is_dashboard_admin())
  with check (public.henderson_is_dashboard_admin());

drop policy if exists henderson_user_roles_self_read on public.henderson_user_roles;
create policy henderson_user_roles_self_read
  on public.henderson_user_roles
  for select
  to authenticated
  using (user_id = auth.uid() and is_active = true);

drop policy if exists henderson_content_public_active_read on public.henderson_content_items;
create policy henderson_content_public_active_read
  on public.henderson_content_items
  for select
  to anon, authenticated
  using (
    status = 'published'
    and (publish_at is null or publish_at <= now())
    and (expires_at is null or expires_at > now())
  );

drop policy if exists henderson_content_dashboard_read on public.henderson_content_items;
create policy henderson_content_dashboard_read
  on public.henderson_content_items
  for select
  to authenticated
  using (public.henderson_is_active_dashboard_user());

drop policy if exists henderson_content_dashboard_insert on public.henderson_content_items;
create policy henderson_content_dashboard_insert
  on public.henderson_content_items
  for insert
  to authenticated
  with check (public.henderson_is_active_dashboard_user());

drop policy if exists henderson_content_dashboard_update on public.henderson_content_items;
create policy henderson_content_dashboard_update
  on public.henderson_content_items
  for update
  to authenticated
  using (public.henderson_is_active_dashboard_user())
  with check (public.henderson_is_active_dashboard_user());

drop policy if exists henderson_content_admin_delete on public.henderson_content_items;
create policy henderson_content_admin_delete
  on public.henderson_content_items
  for delete
  to authenticated
  using (public.henderson_is_dashboard_admin());

drop policy if exists henderson_audit_dashboard_read on public.henderson_audit_events;
create policy henderson_audit_dashboard_read
  on public.henderson_audit_events
  for select
  to authenticated
  using (public.henderson_is_active_dashboard_user());

drop policy if exists henderson_audit_dashboard_insert on public.henderson_audit_events;
create policy henderson_audit_dashboard_insert
  on public.henderson_audit_events
  for insert
  to authenticated
  with check (public.henderson_is_active_dashboard_user());

insert into public.henderson_user_roles (user_id, email, role, is_active)
select id, email, 'admin', true
from auth.users
where lower(email) = lower('jccarver03@gmail.com')
on conflict (user_id) do update
set email = excluded.email,
    role = excluded.role,
    is_active = true;

insert into public.henderson_user_roles (user_id, email, role, is_active)
select id, email, 'editor', true
from auth.users
where lower(email) = lower('TamsenErcole@gmail.com')
on conflict (user_id) do update
set email = excluded.email,
    role = excluded.role,
    is_active = true;
