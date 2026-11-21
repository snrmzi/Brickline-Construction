import Container from "@/components/ui/Container";

const steps = [
  {
    title: "Site visit and quote",
    text: "We walk the site with you, listen to what you need, and send a written quote within five working days.",
  },
  {
    title: "Plan and fixed price",
    text: "We agree the scope, schedule, and a fixed price before any work starts. Changes are priced in writing first.",
  },
  {
    title: "Build with weekly updates",
    text: "One site manager, one weekly report with photos, and a call whenever you want one.",
  },
  {
    title: "Handover and warranty",
    text: "A final walk-through, a punch list closed out, and a written warranty on our workmanship.",
  },
];

export default function Process() {
  return (
    <section className="py-20">
      <Container>
        <h2 className="font-heading text-4xl font-bold uppercase md:text-5xl">
          How a build works
        </h2>
        <ol className="mt-10 grid gap-8 md:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="border-t-2 border-charcoal pt-4">
              <span className="font-heading text-3xl font-bold text-accent">
                {i + 1}
              </span>
              <h3 className="mt-2 font-heading text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
