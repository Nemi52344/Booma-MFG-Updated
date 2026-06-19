import { ReactNode } from "react";
import { ScrollReveal } from "@/hooks/useScrollAnimation";

interface PageHeroProps {
  image: string;
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
  minH?: string;
}

/**
 * Full-bleed hero with a background image and navy gradient overlay.
 * Used across all pages for a consistent, image-led hero style.
 */
export function PageHero({
  image,
  eyebrow,
  title,
  subtitle,
  children,
  minH = "min-h-[85vh]",
}: PageHeroProps) {
  return (
    <section className={`relative ${minH} flex items-center overflow-hidden`}>
      <div className="absolute inset-0">
        <img src={image} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24">
        <div className="max-w-3xl">
          {eyebrow && (
            <ScrollReveal variant="fade-up">
              <span className="inline-block px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.18em] bg-secondary/15 text-secondary-foreground/90 border border-secondary/40 backdrop-blur">
                {eyebrow}
              </span>
            </ScrollReveal>
          )}
          <ScrollReveal variant="fade-up" delay={100}>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight">
              {title}
            </h1>
          </ScrollReveal>
          {subtitle && (
            <ScrollReveal variant="fade-up" delay={200}>
              <p className="mt-5 text-lg text-primary-foreground/80 max-w-2xl leading-relaxed">{subtitle}</p>
            </ScrollReveal>
          )}
          {children && (
            <ScrollReveal variant="fade-up" delay={300}>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">{children}</div>
            </ScrollReveal>
          )}
        </div>
      </div>
    </section>
  );
}
