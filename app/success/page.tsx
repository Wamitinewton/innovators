"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Nav } from "@/components/nav";
import { ArrowLeftIcon, CheckIcon, GROUP_ICONS, InfoIcon, WhatsAppIcon } from "@/components/icons";
import { CLUB_WHATSAPP_CONTACT, GROUPS, MEMBERSHIP_FEE_KES } from "@/lib/groups";
import { getMembership, type MembershipRecord } from "@/lib/membership";

export default function SuccessPage() {
  const router = useRouter();
  const [record, setRecord] = useState<MembershipRecord | null>(null);

  useEffect(() => {
    const membership = getMembership();
    if (!membership) {
      router.replace("/join");
      return;
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect -- syncing from localStorage, an external system
    setRecord(membership);
  }, [router]);

  if (!record) {
    return (
      <>
        <Nav />
        <main className="mx-auto flex min-h-[60vh] max-w-[520px] items-center justify-center px-5" />
      </>
    );
  }

  return (
    <>
      <Nav />

      <main className="mx-auto flex max-w-[520px] flex-col items-center px-5 pb-16 pt-14 text-center sm:pt-20">
        <div className="relative flex h-[120px] w-[120px] items-center justify-center sm:h-[140px] sm:w-[140px]">
          <svg viewBox="0 0 140 140" className="absolute inset-0 -rotate-[8deg]" aria-hidden>
            <circle
              cx="70"
              cy="70"
              r="58"
              fill="none"
              stroke="var(--color-yellow)"
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray="300 40"
            />
          </svg>
          <div className="relative z-10 flex h-[76px] w-[76px] items-center justify-center rounded-full bg-blue shadow-lg sm:h-[88px] sm:w-[88px]">
            <CheckIcon className="h-9 w-9 text-white" strokeWidth={3} />
          </div>
        </div>

        <h1 className="mt-7 font-display text-3xl font-semibold text-ink sm:text-[36px]">You&rsquo;re in.</h1>
        <p className="mt-3 max-w-[420px] font-body text-[15px] leading-relaxed text-ink-soft sm:text-base">
          Payment confirmed for your <strong className="font-bold text-blue">Science Innovators Club</strong>{" "}
          membership. Tap a group below to join its WhatsApp &mdash; join as many as you like.
        </p>

        <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-line bg-paper px-4 py-2 font-body text-[13px] text-ink-faint">
          KES {MEMBERSHIP_FEE_KES} &middot; Ref #{record.reference}
        </span>

        <div className="mt-8 flex w-full max-w-[440px] flex-col gap-2.5 text-left">
          {GROUPS.map((group) => {
            const Icon = GROUP_ICONS[group.slug];
            return (
              <div
                key={group.slug}
                className="flex items-center justify-between gap-3 rounded-2xl border border-line bg-paper py-3 pl-4 pr-3.5"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-[34px] w-[34px] flex-shrink-0 items-center justify-center rounded-[10px] bg-blue-tint text-blue">
                    <Icon className="h-[17px] w-[17px]" />
                  </div>
                  <span className="font-display text-[15px] font-semibold text-ink">{group.name}</span>
                </div>
                <a
                  href={group.whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-shrink-0 items-center gap-1.5 rounded-full bg-whatsapp px-4 py-2 font-body text-[12.5px] font-bold text-white transition-colors hover:bg-whatsapp-deep"
                >
                  <WhatsAppIcon className="h-[13px] w-[13px]" />
                  Join
                </a>
              </div>
            );
          })}
        </div>

        <div className="mt-7 flex w-full max-w-[440px] gap-3 rounded-2xl border border-line bg-paper p-5 text-left">
          <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-blue-tint text-blue">
            <InfoIcon className="h-4 w-4" />
          </div>
          <p className="font-body text-[13.5px] leading-relaxed text-ink-soft">
            Paid but didn&rsquo;t land here? Message us on WhatsApp at{" "}
            <strong className="font-bold text-ink">{CLUB_WHATSAPP_CONTACT}</strong> with your M&#8209;Pesa code and
            we&rsquo;ll add you to the group manually.
          </p>
        </div>

        <Link
          href="/"
          className="mt-7 inline-flex items-center gap-1.5 font-body text-sm font-bold text-blue transition-colors hover:text-blue-deep"
        >
          <ArrowLeftIcon className="h-[15px] w-[15px]" />
          Back to all groups
        </Link>
      </main>
    </>
  );
}
