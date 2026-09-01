import type { AnchorHTMLAttributes, ReactNode } from "react";

export const zeffyDonationFormUrl =
  "https://www.zeffy.com/embed/donation-form/donate-for-preservation-2?modal=true";

const zeffyFormAttribute = {
  "zeffy-form-link": zeffyDonationFormUrl,
} satisfies Record<"zeffy-form-link", string>;

type DonateButtonProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href" | "target" | "rel" | "children"
> & {
  children: ReactNode;
};

export function DonateButton({
  children,
  className,
  ...props
}: DonateButtonProps) {
  return (
    <a
      href={zeffyDonationFormUrl}
      className={className}
      {...zeffyFormAttribute}
      {...props}
    >
      {children}
    </a>
  );
}
