import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/PageHero";
import { ScrollReveal } from "@/hooks/useScrollAnimation";
import heroProducts from "@/assets/deck/photo-production.webp";
import certISO from "@/assets/deck/cert-iso-9001.webp";
import certICAT from "@/assets/deck/cert-icat.webp";

// Load all client logos from the deck
const logos = Object.entries(
  import.meta.glob("../assets/deck/clients/*", { eager: true, import: "default" })
)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, url]) => url as string);

const stats = [
  { value: "20+", label: "Active Clients" },
  { value: "4+", label: "Sectors" },
  { value: "100%", label: "On-Time Delivery" },
  { value: "Zero", label: "Quality Escapes" },
];

const certifications = [
  {
    img: certISO,
    name: "ISO 9001:2015",
    desc: "Quality Management System — certified for consistent quality across all operations.",
  },
  {
    img: certICAT,
    name: "ICAT Type Approval",
    desc: "Automotive type approval certification — ICAT (NATRiP, Govt. of India).",
  },
];

const Products = () => {
  return (
    <Layout>
      {/* Hero */}
      <PageHero
        image={heroProducts}
        eyebrow="Our Customers"
        title="Trusted by Industry Leaders"
        subtitle="Our capabilities span many industries and use-cases, proving the strength of our core manufacturing platform."
      />

      {/* Client logos */}
      <section className="py-16 sm:py-20 bg-background section-soft">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fade-up" className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary">Clients We Have Worked With</h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {logos.map((src, i) => (
              <ScrollReveal key={i} variant="fade" delay={(i % 5) * 60}>
                <div className="flex items-center justify-center h-24 rounded-xl glass-card p-4 industrial-shadow">
                  <img src={src} alt={`Client ${i + 1}`} className="max-h-14 max-w-full object-contain" loading="lazy" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contract manufacturing */}
      <section className="py-16 sm:py-20 bg-muted section-soft">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal variant="fade-up">
              <span className="text-secondary font-semibold tracking-widest text-sm uppercase">Beyond Components</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-primary">Complete Product Contract Manufacturing</h2>
              <p className="mt-4 text-muted-foreground">
                BMPL undertakes complete product contract manufacturing — including complex products such as
                coffee machines and wheelchairs, demonstrating end-to-end production capabilities.
              </p>
            </ScrollReveal>
          </div>

          <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <ScrollReveal key={s.label} variant="scale" delay={i * 80}>
                <div className="rounded-xl bg-primary p-7 text-center industrial-shadow">
                  <p className="text-3xl sm:text-4xl font-extrabold text-secondary">{s.value}</p>
                  <p className="mt-2 text-sm text-primary-foreground/80">{s.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 sm:py-20 bg-background section-soft">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fade-up" className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-secondary font-semibold tracking-widest text-sm uppercase">Quality Assurance</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-primary">Certifications &amp; Standards</h2>
            <p className="mt-4 text-muted-foreground">
              Our manufacturing processes meet the highest international quality standards.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {certifications.map((c, i) => (
              <ScrollReveal key={c.name} variant="fade-up" delay={i * 100}>
                <div className="glass-card rounded-2xl p-4 h-full">
                  <a
                    href={c.img}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center rounded-xl overflow-hidden bg-white ring-1 ring-border p-3"
                    title={`View ${c.name} certificate`}
                  >
                    <img
                      src={c.img}
                      alt={`${c.name} certificate`}
                      loading="lazy"
                      className="max-h-[300px] w-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </a>
                  <div className="mt-3 flex items-start gap-2.5 px-1 pb-1">
                    <ShieldCheck className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-primary leading-tight">{c.name}</h3>
                      <p className="mt-0.5 text-xs text-muted-foreground">{c.desc}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal variant="scale">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground">Ready to Build Together?</h2>
            <p className="mt-4 text-primary-foreground/70 max-w-xl mx-auto">Reach out to discuss your manufacturing requirements.</p>
            <Button asChild size="lg" className="mt-8 bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              <Link to="/contact">Contact Us <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
