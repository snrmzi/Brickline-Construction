"use client";

import { useActionState } from "react";
import { submitQuote } from "@/app/contact/actions";
import {
  budgets,
  projectTypes,
  type FieldName,
  type QuoteState,
} from "@/lib/quote";

const initialState: QuoteState = { ok: false };

const inputClass =
  "w-full rounded-md border border-line bg-surface px-3 py-2.5 text-base outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 aria-[invalid=true]:border-red-600";

function Field({
  label,
  name,
  error,
  children,
}: {
  label: string;
  name: FieldName;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1 block text-sm font-medium">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${name}-error`} className="mt-1 text-sm text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}

export default function QuoteForm() {
  const [state, action, pending] = useActionState(submitQuote, initialState);
  const errors = state.errors ?? {};
  const values = state.values ?? {};

  if (state.ok) {
    return (
      <div role="status" className="rounded-md border border-line bg-surface p-8">
        <h2 className="font-heading text-3xl font-bold uppercase">
          Request sent
        </h2>
        <p className="mt-3 text-muted">
          {state.name ? `Thanks, ${state.name}. ` : "Thanks. "}
          We will reply within one business day with the next steps.
        </p>
      </div>
    );
  }

  const describe = (name: FieldName) =>
    errors[name] ? `${name}-error` : undefined;

  return (
    <form action={action} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" name="name" error={errors.name}>
          <input
            id="name"
            name="name"
            autoComplete="name"
            defaultValue={values.name ?? ""}
            aria-invalid={!!errors.name}
            aria-describedby={describe("name")}
            className={inputClass}
          />
        </Field>
        <Field label="Email" name="email" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            defaultValue={values.email ?? ""}
            aria-invalid={!!errors.email}
            aria-describedby={describe("email")}
            className={inputClass}
          />
        </Field>
      </div>

      <Field label="Phone (optional)" name="phone" error={errors.phone}>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          defaultValue={values.phone ?? ""}
          aria-invalid={!!errors.phone}
          aria-describedby={describe("phone")}
          className={inputClass}
        />
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Project type" name="projectType" error={errors.projectType}>
          <select
            id="projectType"
            name="projectType"
            defaultValue={values.projectType ?? ""}
            aria-invalid={!!errors.projectType}
            aria-describedby={describe("projectType")}
            className={inputClass}
          >
            <option value="" disabled>
              Choose one
            </option>
            {projectTypes.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </Field>
        <Field label="Budget range" name="budget" error={errors.budget}>
          <select
            id="budget"
            name="budget"
            defaultValue={values.budget ?? ""}
            aria-invalid={!!errors.budget}
            aria-describedby={describe("budget")}
            className={inputClass}
          >
            <option value="" disabled>
              Choose one
            </option>
            {budgets.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="About your project" name="message" error={errors.message}>
        <textarea
          id="message"
          name="message"
          rows={5}
          defaultValue={values.message ?? ""}
          aria-invalid={!!errors.message}
          aria-describedby={describe("message")}
          className={inputClass}
        />
      </Field>

      {/* Honeypot field: hidden from people, filled in by bots. */}
      <div className="hidden" aria-hidden="true">
        <label>
          Leave this empty
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <button
        type="submit"
        disabled={pending}
        className="rounded-md bg-accent px-6 py-3 font-semibold text-white transition hover:opacity-90 disabled:opacity-60"
      >
        {pending ? "Sending..." : "Send quote request"}
      </button>
    </form>
  );
}
