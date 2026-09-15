import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export function Nav({ right }: { right?: ReactNode }) {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-cream/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-[76px] sm:px-8">
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3">
          <Image
            src="/brand/icon-512.png"
            alt="Science Innovators Club"
            width={512}
            height={512}
            preload
            className="h-7 w-7 sm:h-9 sm:w-9"
          />
          <span className="flex flex-col leading-tight">
            <span className="font-display text-[13.5px] font-semibold text-ink sm:text-base">
              Science Innovators Club
            </span>
            <span className="font-body text-[9px] font-bold uppercase tracking-wider text-ink-faint sm:text-[10.5px]">
              Meru University
            </span>
          </span>
        </Link>
        {right}
      </div>
    </header>
  );
}
