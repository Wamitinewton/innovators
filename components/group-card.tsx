import { CheckIcon, GROUP_ICONS } from "@/components/icons";
import type { Group } from "@/lib/groups";

export function GroupCard({ group }: { group: Group }) {
  const Icon = GROUP_ICONS[group.slug];

  return (
    <div className="flex flex-col gap-3.5 rounded-2xl border border-line bg-paper p-6 sm:gap-3.5 sm:p-7">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-tint text-blue sm:h-11 sm:w-11">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="font-display text-lg font-semibold text-ink sm:text-xl">{group.name}</h3>
      <p className="flex-1 font-body text-sm leading-relaxed text-ink-soft">{group.description}</p>
      <hr className="h-px w-full border-0 bg-line" />
      <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-blue-tint px-3 py-1.5 font-body text-xs font-bold text-blue">
        <CheckIcon className="h-3 w-3" />
        Included in membership
      </span>
    </div>
  );
}
