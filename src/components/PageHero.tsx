import Container from "@/components/Container";

type PageHeroProps = {
  title: string;
  subtitle: string;
};

export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="bg-accent-gradient py-16 sm:py-20">
      <Container>
        <h1 className="max-w-4xl text-4xl font-black uppercase tracking-tight text-white sm:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-base text-white/90 sm:text-lg">{subtitle}</p>
      </Container>
    </section>
  );
}
