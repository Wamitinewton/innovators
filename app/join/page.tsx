"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Script from "next/script";
import { Nav } from "@/components/nav";
import { Field } from "@/components/field";
import {
  ArrowLeftIcon,
  InfoIcon,
  LockIcon,
  MailIcon,
  MembershipIcon,
  PhonePayIcon,
  UserIcon,
} from "@/components/icons";
import { MEMBERSHIP_FEE_KES, WAITING_GROUP_LINK } from "@/lib/groups";
import { isMember, saveMembership } from "@/lib/membership";
import { payWithMpesa } from "@/lib/paystack";

type Status = "idle" | "opening" | "cancelled" | "error";
type GatewayStatus = "loading" | "ready" | "unavailable";

const GATEWAY_TIMEOUT_MS = 8000;

export default function JoinPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [gatewayStatus, setGatewayStatus] = useState<GatewayStatus>("loading");
  const [scriptAttempt, setScriptAttempt] = useState(0);

  useEffect(() => {
    if (isMember()) {
      router.replace("/success");
    }
  }, [router]);

  useEffect(() => {
    if (gatewayStatus !== "loading") return;
    const timer = setTimeout(() => setGatewayStatus("unavailable"), GATEWAY_TIMEOUT_MS);
    return () => clearTimeout(timer);
  }, [gatewayStatus, scriptAttempt]);

  function retryGateway() {
    setGatewayStatus("loading");
    setScriptAttempt((attempt) => attempt + 1);
  }

  const canSubmit = name.trim().length > 1 && /\S+@\S+\.\S+/.test(email) && status !== "opening";

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!canSubmit) return;

    setStatus("opening");
    payWithMpesa({
      email,
      amountKes: MEMBERSHIP_FEE_KES,
      onSuccess: (reference) => {
        saveMembership(reference);
        router.push("/success");
      },
      onClose: () => setStatus("cancelled"),
      onError: () => setStatus("error"),
    });
  }

  return (
    <>
      <Script
        key={scriptAttempt}
        src="https://js.paystack.co/v2/inline.js"
        strategy="afterInteractive"
        onLoad={() => setGatewayStatus("ready")}
        onError={() => setGatewayStatus("unavailable")}
      />

      <Nav
        right={
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 font-body text-sm font-bold text-blue transition-colors hover:text-blue-deep"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            All groups
          </Link>
        }
      />

      <main className="mx-auto flex max-w-[560px] flex-col px-5 py-12 sm:py-16">
        <span className="mb-3.5 font-body text-[13px] font-bold uppercase tracking-wider text-blue">
          Become a member
        </span>

        <div className="flex items-start gap-4 rounded-2xl border border-line bg-paper p-6">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-blue-tint text-blue">
            <MembershipIcon className="h-6 w-6" />
          </div>
          <div className="flex flex-col gap-1.5">
            <h1 className="font-display text-[22px] font-semibold text-ink">Science Innovators Club Membership</h1>
            <p className="font-body text-[14.5px] leading-relaxed text-ink-soft">
              One semester, every group &mdash; Android, Cyber Security, Web Dev, Data Science, Robotics &amp; IoT,
              and UI/UX Design.
            </p>
            <span className="mt-1.5 inline-flex w-fit rounded-full bg-blue-tint px-3 py-1.5 font-body text-[13px] font-bold text-blue">
              KES {MEMBERSHIP_FEE_KES} / semester
            </span>
          </div>
        </div>

        <h2 className="mt-10 font-display text-xl font-semibold text-ink">Your details</h2>

        <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-5">
          <Field
            id="name"
            label="Full name"
            icon={<UserIcon className="h-[18px] w-[18px]" />}
            type="text"
            placeholder="Wanjiru Kimani"
            value={name}
            onChange={(event) => setName(event.target.value)}
            autoComplete="name"
            required
          />
          <Field
            id="email"
            label="Email address"
            icon={<MailIcon className="h-[18px] w-[18px]" />}
            type="email"
            placeholder="wanjiru.kimani@students.meru.ac.ke"
            hint="We'll send your Paystack receipt here."
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            autoComplete="email"
            required
          />

          <button
            type="submit"
            disabled={!canSubmit || gatewayStatus !== "ready"}
            className="mt-2 flex h-14 w-full items-center justify-center gap-2.5 rounded-2xl bg-pink font-display text-base font-semibold text-white transition-colors hover:bg-pink-deep disabled:cursor-not-allowed disabled:opacity-50"
          >
            <PhonePayIcon className="h-5 w-5" />
            {gatewayStatus === "loading"
              ? "Loading payment gateway…"
              : gatewayStatus === "unavailable"
                ? "Payment gateway unavailable"
                : status === "opening"
                  ? "Opening M-Pesa…"
                  : `Pay KES ${MEMBERSHIP_FEE_KES} with M-Pesa`}
          </button>

          {gatewayStatus === "unavailable" && (
            <div className="flex gap-3 rounded-xl border border-line bg-cream-deep p-4 text-left">
              <InfoIcon className="mt-0.5 h-[18px] w-[18px] flex-shrink-0 text-blue" />
              <div className="flex flex-col gap-2 font-body text-[13.5px] leading-relaxed text-ink-soft">
                <p>
                  The payment gateway didn&rsquo;t load. This is usually an ad blocker or privacy extension
                  blocking Paystack&rsquo;s script, or a slow connection.
                </p>
                <button type="button" onClick={retryGateway} className="w-fit font-bold text-blue">
                  Try again
                </button>
              </div>
            </div>
          )}

          {status === "cancelled" && (
            <div className="flex gap-3 rounded-xl border border-line bg-cream-deep p-4 text-left">
              <InfoIcon className="mt-0.5 h-[18px] w-[18px] flex-shrink-0 text-blue" />
              <p className="font-body text-[13.5px] leading-relaxed text-ink-soft">
                Payment window closed before completing. You can try again above, or{" "}
                <a href={WAITING_GROUP_LINK} target="_blank" rel="noreferrer" className="font-bold text-blue">
                  join the waiting group
                </a>{" "}
                in the meantime.
              </p>
            </div>
          )}

          {status === "error" && (
            <div className="flex gap-3 rounded-xl border border-line bg-cream-deep p-4 text-left">
              <InfoIcon className="mt-0.5 h-[18px] w-[18px] flex-shrink-0 text-blue" />
              <p className="font-body text-[13.5px] leading-relaxed text-ink-soft">
                The payment window couldn&rsquo;t open. Check your connection and try again.
              </p>
            </div>
          )}

          <div className="flex items-center justify-center gap-1.5">
            <LockIcon className="h-[15px] w-[15px] text-blue" />
            <span className="font-body text-xs text-ink-faint">Secured by Paystack &middot; M-Pesa STK push</span>
          </div>

          <div className="my-2 flex items-center gap-3">
            <span className="h-px flex-1 bg-line" />
            <span className="font-body text-[11px] font-medium uppercase tracking-wider text-ink-faint">or</span>
            <span className="h-px flex-1 bg-line" />
          </div>

          <p className="text-center font-body text-[14.5px] text-ink-soft">
            Not ready to pay?{" "}
            <a href={WAITING_GROUP_LINK} target="_blank" rel="noreferrer" className="font-bold text-blue">
              Join the waiting group instead &rarr;
            </a>
          </p>
        </form>
      </main>
    </>
  );
}
