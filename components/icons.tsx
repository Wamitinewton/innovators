import type { SVGProps } from "react";
import type { GroupSlug } from "@/lib/groups";

type IconProps = SVGProps<SVGSVGElement>;

function base(props: IconProps, children: React.ReactNode) {
  const { className, ...rest } = props;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...rest}
    >
      {children}
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return base(
    { strokeWidth: 2.25, ...props },
    <path d="M9 6l6 6-6 6" />
  );
}

export function ArrowRightLongIcon(props: IconProps) {
  return base(
    { strokeWidth: 2, ...props },
    <path d="M4 12h16M14 6l6 6-6 6" />
  );
}

export function ArrowLeftIcon(props: IconProps) {
  return base(
    { strokeWidth: 2.25, ...props },
    <path d="M20 12H4M10 18l-6-6 6-6" />
  );
}

export function CheckIcon(props: IconProps) {
  return base(
    { strokeWidth: 2.5, ...props },
    <path d="M5 13l4 4L19 7" />
  );
}

export function UserIcon(props: IconProps) {
  return base(
    props,
    <>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20c1.5-4 5-6 7-6s5.5 2 7 6" />
    </>
  );
}

export function MailIcon(props: IconProps) {
  return base(
    props,
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </>
  );
}

export function MembershipIcon(props: IconProps) {
  return base(
    props,
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M2.5 19c1.2-3.2 3.9-5 6.5-5s5.3 1.8 6.5 5" />
      <circle cx="17" cy="8.5" r="2.5" />
      <path d="M15.5 14.2c2.3.3 4.3 1.8 5.2 4.3" />
    </>
  );
}

export function PhonePayIcon(props: IconProps) {
  return base(
    props,
    <>
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <path d="M11 18h2" />
    </>
  );
}

export function LockIcon(props: IconProps) {
  return base(
    props,
    <>
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11V8a4 4 0 018 0v3" />
    </>
  );
}

export function InfoIcon(props: IconProps) {
  return base(
    { strokeWidth: 2, ...props },
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5.5M12 8v.01" />
    </>
  );
}

export function WhatsAppIcon(props: IconProps) {
  const { className, ...rest } = props;
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...rest}>
      <path d="M12 3a9 9 0 00-7.8 13.5L3 21l4.7-1.2A9 9 0 1012 3z" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return base(
    { strokeWidth: 2, ...props },
    <path d="M4 7h16M4 12h16M4 17h16" />
  );
}

export function CloseIcon(props: IconProps) {
  return base(
    { strokeWidth: 2, ...props },
    <path d="M6 6l12 12M18 6L6 18" />
  );
}

function AndroidIcon(props: IconProps) {
  return base(
    props,
    <>
      <rect x="6" y="9" width="12" height="9" rx="3" />
      <path d="M9 9V7a3 3 0 016 0v2" />
      <path d="M4 11l1.6 1.2M20 11l-1.6 1.2" />
      <circle cx="9.6" cy="13" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="14.4" cy="13" r="0.9" fill="currentColor" stroke="none" />
    </>
  );
}

function CyberSecurityIcon(props: IconProps) {
  return base(
    props,
    <>
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
      <path d="M9.3 12l1.8 1.8L15 9.6" />
    </>
  );
}

function WebDevIcon(props: IconProps) {
  return base(
    props,
    <path d="M8 8l-5 4 5 4M16 8l5 4-5 4M13.5 6l-3 12" />
  );
}

function DataScienceIcon(props: IconProps) {
  return base(
    props,
    <>
      <rect x="4" y="13" width="3.5" height="7" rx="0.5" />
      <rect x="10.25" y="7" width="3.5" height="13" rx="0.5" />
      <rect x="16.5" y="10.5" width="3.5" height="9.5" rx="0.5" />
    </>
  );
}

function RoboticsIcon(props: IconProps) {
  return base(
    props,
    <>
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <path d="M9 7V3M15 7V3M9 21v-4M15 21v-4M7 9H3M7 15H3M21 9h-4M21 15h-4" />
    </>
  );
}

function UiUxIcon(props: IconProps) {
  return base(
    props,
    <>
      <path d="M4 20l3-1 10.5-10.5-2-2L5 17l-1 3z" />
      <path d="M14 6l2 2" />
    </>
  );
}

export const GROUP_ICONS: Record<GroupSlug, (props: IconProps) => React.JSX.Element> = {
  android: AndroidIcon,
  "cyber-security": CyberSecurityIcon,
  "web-development": WebDevIcon,
  "data-science": DataScienceIcon,
  "robotics-iot": RoboticsIcon,
  "ui-ux-design": UiUxIcon,
};
