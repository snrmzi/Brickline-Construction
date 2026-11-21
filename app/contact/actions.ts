"use server";

import { z } from "zod";
import {
  budgets,
  projectTypes,
  type FieldName,
  type QuoteState,
} from "@/lib/quote";

const schema = z.object({
  name: z.string().trim().min(2, "Enter your name (at least 2 characters)."),
  email: z
    .string()
    .trim()
    .email("Enter a valid email address, like name@example.com."),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9+()\-\s]{0,20}$/, "Use digits, spaces, +, - or parentheses only."),
  projectType: z.enum(projectTypes, { message: "Choose a project type." }),
  budget: z.enum(budgets, { message: "Choose a budget range." }),
  message: z
    .string()
    .trim()
    .min(10, "Tell us a little more (at least 10 characters).")
    .max(2000, "Keep your message under 2,000 characters."),
});

export async function submitQuote(
  _prev: QuoteState,
  formData: FormData,
): Promise<QuoteState> {
  const raw = Object.fromEntries(formData) as Record<string, string>;

  // Honeypot: real visitors never see or fill this field.
  if (raw.website) return { ok: true };

  const parsed = schema.safeParse(raw);

  if (!parsed.success) {
    const errors: Partial<Record<FieldName, string>> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0]) as FieldName;
      if (!errors[key]) errors[key] = issue.message;
    }
    return { ok: false, errors, values: raw };
  }

  // TODO: save to Supabase (quote_requests) and send an email with Resend.
  console.log("New quote request:", parsed.data);

  return { ok: true, name: parsed.data.name };
}
