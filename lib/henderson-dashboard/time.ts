import { HENDERSON_TIME_ZONE } from "./types";

function partsFor(date: Date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: HENDERSON_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);

  const get = (type: string) => parts.find((part) => part.type === type)?.value ?? "";

  return {
    year: Number(get("year")),
    month: Number(get("month")),
    day: Number(get("day")),
    hour: Number(get("hour")),
    minute: Number(get("minute")),
  };
}

export function formatDashboardDateTime(value: string | null | undefined) {
  if (!value) return "Not set";
  const date = new Date(value);
  if (!Number.isFinite(date.getTime())) return "Not set";

  return new Intl.DateTimeFormat("en-US", {
    timeZone: HENDERSON_TIME_ZONE,
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(date);
}

export function toDashboardDateTimeLocal(value: string | null | undefined) {
  if (!value) return "";
  const date = new Date(value);
  if (!Number.isFinite(date.getTime())) return "";
  const parts = partsFor(date);
  return `${parts.year}-${String(parts.month).padStart(2, "0")}-${String(parts.day).padStart(2, "0")}T${String(parts.hour).padStart(2, "0")}:${String(parts.minute).padStart(2, "0")}`;
}

export function fromDashboardDateTimeLocal(value: string | null | undefined) {
  const raw = String(value || "").trim();
  if (!raw) return null;
  const match = raw.match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})$/);
  if (!match) return null;

  const [, yearRaw, monthRaw, dayRaw, hourRaw, minuteRaw] = match;
  const desiredUtc = Date.UTC(
    Number(yearRaw),
    Number(monthRaw) - 1,
    Number(dayRaw),
    Number(hourRaw),
    Number(minuteRaw),
  );
  let candidate = new Date(desiredUtc);

  for (let index = 0; index < 3; index += 1) {
    const actual = partsFor(candidate);
    const actualUtc = Date.UTC(actual.year, actual.month - 1, actual.day, actual.hour, actual.minute);
    candidate = new Date(candidate.getTime() + (desiredUtc - actualUtc));
  }

  return candidate.toISOString();
}
