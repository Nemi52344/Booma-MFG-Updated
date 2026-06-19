import { Link } from "react-router-dom";
import {
  ArrowRight, Cog, Cpu, Flame, Zap, Boxes, Ruler, CheckCircle2,
  Car, Factory, Refrigerator, Plane,
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/hooks/useScrollAnimation";
import heroImg from "@/assets/deck/photo-machine3.jpg";
import indAuto from "@/assets/deck/ind-automotive.jpeg";
import indIndustrial from "@/assets/deck/photo-machine2.jpg";
import indConsumer from "@/assets/deck/ind-consumer.jpeg";
import indDefence from "@/assets/deck/ind-defence.jpeg";

const industries = [
  {
    title: "Automotive & EV",
    icon: Car,
    description: "Pressed metal components, structural brackets and mounts for vehicle platforms.",
    image: indAuto,
  },
  {
    title: "Industrial Machinery",
    icon: Factory,
    description: "Precision-machined sub-assemblies and sheet-metal fabricated enclosures.",
    image: indIndustrial,
  },
  {
    title: "Consumer Appliances",
    icon: Refrigerator,
    description: "Cost-optimized high-volume manufacturing with DFM support.",
    image: indDefence,
  },
  {
    title: "Aerospace & Defense",
    icon: Plane,
    description: "Low-volume, high-complexity, ruggedized parts with strict quality control.",
    image: indConsumer,
  },
];

const capabilities = [
  { icon: Cog, title: "Power Press & Sheet Metal", spec: "45T–400T capacity, 0.3–20mm thickness" },
  { icon: Cpu, title: "VMC & CNC Machining", spec: "4-Axis, 2000×1500×500mm work envelope" },
  { icon: Flame, title: "Welding & Fabrication", spec: "MIG, TIG, ARC & Laser up to 1000A" },
  { icon: Zap, title: "EDM & Wire Cutting", spec: "4-Axis precision for dies and profiles" },
  { icon: Boxes, title: "Plastic Tooling & Moulding", spec: "100T–1000T injection moulding" },
  { icon: Ruler, title: "Quality & Metrology", spec: "CMM Bridge & Arm for validation" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Booma Manufacturing facility" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/20" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 sm:py-20">
          <div className="max-w-3xl mt-16 sm:mt-24 -translate-y-2">
            <ScrollReveal variant="fade-up" delay={100}>
              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight">
                Precision Manufacturing{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-800 via-blue-500 to-blue-200">Excellence</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal variant="fade-up" delay={200}>
              <p className="mt-6 text-lg text-primary-foreground/80 max-w-2xl leading-relaxed">
                From tool development and prototyping to scalable serial production — BMPL delivers
                precision-engineered components for automotive, industrial, consumer, and aerospace &amp;
                defense sectors.
              </p>
            </ScrollReveal>
            <ScrollReveal variant="fade-up" delay={300}>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                  <Link to="/services">Explore Capabilities <ArrowRight className="ml-2 w-5 h-5" /></Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 bg-primary-foreground/5 text-primary-foreground hover:bg-primary-foreground/15">
                  <Link to="/about">About Us</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Multi-Sector */}
      <section className="py-16 sm:py-20 bg-background section-soft">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.18em] bg-secondary/10 text-secondary">Industries We Serve</span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">Multi-Sector Manufacturing Excellence</h2>
            <p className="mt-4 text-muted-foreground">
              Proven capabilities across automotive, industrial, consumer, and aerospace &amp; defense sectors —
              supporting India's manufacturing self-reliance agenda.
            </p>
          </ScrollReveal>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((ind, i) => (
              <ScrollReveal key={ind.title} variant="fade-up" delay={i * 100}>
                <div className="group relative overflow-hidden rounded-2xl industrial-shadow h-80 ring-1 ring-border/50">
                  <img
                    src={ind.image}
                    alt={ind.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-primary/20" />

                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <h3 className="text-lg font-bold text-primary-foreground">{ind.title}</h3>
                    <p className="mt-2 text-sm text-primary-foreground/75 leading-relaxed">{ind.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 sm:py-20 bg-muted section-soft">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto">
            <span className="text-secondary font-semibold tracking-widest text-sm uppercase">Capabilities</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-primary">End-to-End Manufacturing Platform</h2>
            <p className="mt-4 text-muted-foreground">
              From tool design and prototyping through scalable serial production — all under one roof.
            </p>
          </ScrollReveal>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {capabilities.map((cap, i) => (
              <ScrollReveal key={cap.title} variant="fade-up" delay={i * 70}>
                <div className="group glass-card rounded-xl px-6 py-5 flex items-center gap-4 hover:border-secondary/60 transition-all hover:-translate-y-0.5 h-full">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                    <cap.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-primary leading-tight">{cap.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{cap.spec}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal variant="fade" delay={200}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 rounded-2xl bg-primary px-6 py-5 text-center ring-1 ring-white/10">
              <div className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-secondary/20">
                  <CheckCircle2 className="w-4 h-4 text-secondary" />
                </span>
                <p className="text-primary-foreground font-semibold tracking-wide">
                  Certified Quality — AS9100D · ISO 9001
                </p>
              </div>
              <span className="hidden sm:inline text-primary-foreground/30">|</span>
              <p className="text-primary-foreground/80 font-medium">10+ Specialized Processes</p>
            </div>
          </ScrollReveal>

          <div className="mt-10 text-center">
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Link to="/services">View All Capabilities <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal variant="scale">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground">Ready to Build Together?</h2>
            <p className="mt-4 text-primary-foreground/70 max-w-xl mx-auto">
              Reach out to discuss your manufacturing requirements.
            </p>
            <Button asChild size="lg" className="mt-8 bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              <Link to="/contact">Contact Us <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
