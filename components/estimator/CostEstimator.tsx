"use client";

import Link from "next/link";
import { useState } from "react";

// Rough rates in USD per square meter. Demo values only.
const rates = {
  "New home": 1800,
  "Home extension": 2200,
  "Renovation": 1100,
  "Commercial fit-out": 1300,
  "Roof replacement": 180,
} as const;

const finishes = {
  Standard: 1,
  Premium: 1.3,
  Luxury: 1.7,
} as const;

type ProjectType = keyof typeof rates;
type Finish = keyof typeof finishes;

const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

function roundTo(value: number) {
  const step = value < 20_000 ? 500 : value < 200_000 ? 1_000 : 5_000;
  return Math.round(value / step) * step;
}

const MIN_AREA = 5;
const MAX_AREA = 10_000;

const fieldClass =
  "w-full rounded-md border border-line bg-surface px-3 py-2.5 text-base outline-none focus:border-accent focus:ring-2 focus:ring-accent/30";

export default function CostEstimator() {
  const [type, setType] = useState<ProjectType>("New home");
  const [area, setArea] = useState("120");
  const [finish, setFinish] = useState<Finish>("Standard");

  const areaNum = Number(area);
  const valid = Number.isFinite(areaNum) && areaNum >= MIN_AREA && areaNum <= MAX_AREA;

  const base = valid ? areaNum * rates[type] * finishes[finish] : 0;
  const low = roundTo(base * 0.9);
  const high = roundTo(base * 1.15);

  return (
    <div className="grid gap-10 md:grid-cols-[1fr_1fr]">
      <div className="space-y-6">
        <div>
          <label htmlFor="type" className="mb-1 block text-sm font-medium">
            Project type
          </label>
          <select
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value as ProjectType)}
            className={fieldClass}
          >
            {(Object.keys(rates) as ProjectType[]).map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="area" className="mb-1 block text-sm font-medium">
            Floor area (m²)
          </label>
          <input
            id="area"
            type="number"
            inputMode="numeric"
            min={MIN_AREA}
            max={MAX_AREA}
            value={area}
            onChange={(e) => setArea(e.target.value)}
            aria-invalid={!valid}
            className={fieldClass}
          />
        </div>

        <fieldset>
          <legend className="mb-2 text-sm font-medium">Finish level</legend>
          <div className="grid grid-cols-3 gap-2">
            {(Object.keys(finishes) as Finish[]).map((f) => (
              <label
                key={f}
                className={`cursor-pointer rounded-md border px-3 py-2.5 text-center text-sm font-medium transition has-focus-visible:outline-2 has-focus-visible:outline-accent ${
                  finish === f
                    ? "border-charcoal bg-charcoal text-white"
                    : "border-line bg-surface hover:border-charcoal"
                }`}
              >
                <input
                  type="radio"
                  name="finish"
                  value={f}
                  checked={finish === f}
                  onChange={() => setFinish(f)}
                  className="sr-only"
                />
                {f}
              </label>
            ))}
          </div>
        </fieldset>
      </div>

      <div className="rounded-md border border-charcoal bg-surface p-8">
        <p className="text-sm text-muted">Estimated build cost</p>
        {valid ? (
          <p
            className="mt-2 font-heading text-4xl font-bold leading-tight md:text-5xl"
            aria-live="polite"
          >
            {money.format(low)} to {money.format(high)}
          </p>
        ) : (
          <p className="mt-2 text-lg text-red-700" aria-live="polite">
            Enter an area between {MIN_AREA} and {MAX_AREA.toLocaleString("en-US")} m².
          </p>
        )}
        <p className="mt-4 text-sm leading-relaxed text-muted">
          A rough guide based on average rates. Site conditions, design, and
          permits change the final price, so treat this as a starting point,
          not a quote.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-block rounded-md bg-accent px-6 py-3 font-semibold text-white transition hover:opacity-90"
        >
          Request a detailed quote
        </Link>
      </div>
    </div>
  );
}
