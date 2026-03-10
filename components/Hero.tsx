import shared from "@/app/shared.module.css";

interface HeroProps {
  title: string;
  tagline: string;
  description?: string;
  children?: React.ReactNode;
}

export default function Hero({ title, tagline, description, children }: HeroProps) {
  return (
    <section className={shared.hero}>
      <h1 className={shared.heroTitle}>{title}</h1>
      <p className={shared.tagline}>{tagline}</p>
      {description && <p className={shared.description}>{description}</p>}
      {children && <div className={shared.heroCta}>{children}</div>}
    </section>
  );
}
