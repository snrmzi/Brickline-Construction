export type FieldName =
  | "name"
  | "email"
  | "phone"
  | "projectType"
  | "budget"
  | "message";

export type QuoteState = {
  ok: boolean;
  name?: string;
  errors?: Partial<Record<FieldName, string>>;
  values?: Record<string, string>;
};

export const projectTypes = [
  "Residential",
  "Commercial",
  "Renovation",
  "Roofing",
  "Other",
] as const;

export const budgets = [
  "Under $50k",
  "$50k to $150k",
  "$150k to $500k",
  "Over $500k",
  "Not sure yet",
] as const;
