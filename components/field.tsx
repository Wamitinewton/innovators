import type { InputHTMLAttributes, ReactNode } from "react";

type FieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  icon: ReactNode;
  hint?: string;
};

export function Field({ label, icon, hint, id, ...inputProps }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block font-body text-[13px] font-bold text-ink">
        {label}
      </label>
      <div className="relative">
        <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-faint">
          {icon}
        </span>
        <input
          id={id}
          className="w-full rounded-xl border border-line bg-paper py-3.5 pl-11 pr-4 font-body text-[15px] text-ink outline-none transition-colors focus:border-blue"
          {...inputProps}
        />
      </div>
      {hint ? <span className="mt-2 block font-body text-[13px] text-ink-faint">{hint}</span> : null}
    </div>
  );
}
