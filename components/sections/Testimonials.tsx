import Container from "@/components/ui/Container";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section className="bg-surface py-20">
      <Container>
        <h2 className="font-heading text-4xl font-bold uppercase md:text-5xl">
          What clients say
        </h2>
        <ul className="mt-10 grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <li key={t.name}>
              <figure className="border-l-4 border-accent pl-5">
                <blockquote className="leading-relaxed">{t.quote}</blockquote>
                <figcaption className="mt-4 text-sm">
                  <span className="font-semibold">{t.name}</span>
                  <span className="block text-muted">{t.role}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
