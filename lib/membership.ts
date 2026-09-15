import { CURRENT_SEMESTER } from "./groups";

const STORAGE_KEY = "membership";

export type MembershipRecord = {
  semester: string;
  reference: string;
  paidAt: number;
};

export function saveMembership(reference: string): MembershipRecord {
  const record: MembershipRecord = {
    semester: CURRENT_SEMESTER,
    reference,
    paidAt: Date.now(),
  };
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
  return record;
}

export function getMembership(): MembershipRecord | null {
  if (typeof window === "undefined") return null;

  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) return null;

  try {
    const record = JSON.parse(raw) as MembershipRecord;
    if (record.semester !== CURRENT_SEMESTER || !record.reference) return null;
    return record;
  } catch {
    return null;
  }
}

export function isMember(): boolean {
  return getMembership() !== null;
}
