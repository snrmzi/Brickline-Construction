import Container from "@/components/ui/Container";

export default function PageHeader({
  title,
  intro,
}: {
  title: string;
  intro?: string;
}) {
  return (
    <section className="bg-charcoal text-white">
      <Container className="py-14 md:py-20">
        <h1 className="font-heading text-4xl font-bold uppercase leading-tight md:text-6xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-4 max-w-2xl text-lg text-white/75">{intro}</p>
        )}
      </Container>
    </section>
  );
}
