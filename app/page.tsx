"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { Nav } from "@/components/nav";
import { GroupCard } from "@/components/group-card";
import { ArrowRightIcon, ArrowRightLongIcon } from "@/components/icons";
import { CLUB_WHATSAPP_CONTACT, GROUPS, MEMBERSHIP_FEE_KES, WAITING_GROUP_LINK } from "@/lib/groups";
import { isMember } from "@/lib/membership";

export default function Home() {
  const router = useRouter();

  function handleAlreadyMember() {
    router.push(isMember() ? "/success" : "/join");
  }

  return (
    <>
      <Nav
        right={
          <a
            href={WAITING_GROUP_LINK}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-1.5 font-body text-sm font-bold text-blue transition-colors hover:text-blue-deep sm:inline-flex"
          >
            Not ready? Waiting group
            <ArrowRightLongIcon className="h-4 w-4" />
          </a>
        }
      />

      <main>
        <section className="relative overflow-hidden px-5 pb-14 pt-12 sm:px-8 sm:pb-20 sm:pt-20">
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center">
            <span className="-rotate-3 rounded-full bg-yellow px-3.5 py-1.5 font-body text-[11px] font-bold uppercase tracking-wider text-ink sm:px-4 sm:text-xs">
              Kickstart 2026
            </span>
            <h1 className="font-display text-[32px] font-semibold leading-[1.15] text-ink sm:text-[54px] sm:leading-[1.08]">
              One membership. Every group. <span className="text-pink">You&rsquo;re in.</span>
            </h1>
            <p className="max-w-xl font-body text-[15px] leading-relaxed text-ink-soft sm:text-lg">
              Meru University Science Innovators Club is kicking off the semester. Pay a single KES&nbsp;100
              community membership fee by M&#8209;Pesa and unlock every interest group&rsquo;s WhatsApp &mdash; join
              as many as you like, no per-group fees.
            </p>
            <Link
              href="/join"
              className="inline-flex items-center gap-2 rounded-full bg-pink px-7 py-3.5 font-body text-[15px] font-bold text-white transition-colors hover:bg-pink-deep sm:text-base sm:px-8 sm:py-4"
            >
              Become a Member &mdash; KES {MEMBERSHIP_FEE_KES}
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-6">
              <a
                href={WAITING_GROUP_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-body text-sm font-bold text-blue transition-colors hover:text-blue-deep"
              >
                Not ready to pay yet? Join our waiting group instead
                <ArrowRightLongIcon className="h-4 w-4" />
              </a>
              <button
                type="button"
                onClick={handleAlreadyMember}
                className="inline-flex items-center gap-1.5 font-body text-sm font-bold text-blue transition-colors hover:text-blue-deep"
              >
                Already a member? Get your group links
                <ArrowRightLongIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>

        <section className="px-5 pb-16 sm:px-8 sm:pb-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 sm:mb-11">
              <span className="mb-2 block font-body text-[11.5px] font-bold uppercase tracking-wider text-blue sm:text-[13px]">
                Groups &middot; all included in your KES {MEMBERSHIP_FEE_KES} membership
              </span>
              <div className="relative inline-block">
                <h2 className="font-display text-[26px] font-semibold text-ink sm:text-[34px]">
                  Choose your track
                </h2>
                <svg
                  className="absolute -bottom-2 left-0.5 w-[110px] sm:-bottom-2.5 sm:w-[150px]"
                  viewBox="0 0 150 14"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M2 9c25-11 100-11 146 0"
                    stroke="var(--color-pink)"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
              {GROUPS.map((group) => (
                <GroupCard key={group.slug} group={group} />
              ))}
            </div>
          </div>
        </section>

        <footer className="border-t border-line bg-cream-deep px-5 py-12 text-center sm:px-8 sm:py-14">
          <p className="font-display text-lg font-semibold text-ink sm:text-xl">Not ready to pay yet?</p>
          <a
            href={WAITING_GROUP_LINK}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 font-body text-sm font-bold text-blue transition-colors hover:text-blue-deep"
          >
            Join our waiting group instead
            <ArrowRightLongIcon className="h-4 w-4" />
          </a>
          <p className="mt-3 font-body text-xs text-ink-faint">No forms. No fees. Just updates until you&rsquo;re ready.</p>
          <p className="mt-4 font-body text-[11px] leading-relaxed text-ink-faint sm:text-xs">
            Meru University &middot; Science Innovators Club &middot; {CLUB_WHATSAPP_CONTACT}
          </p>
        </footer>
      </main>
    </>
  );
}
