import { Link } from "react-router-dom";
import {
  ArrowRight, Boxes, PenTool, Factory, TrendingDown,
  Layers, Gauge, DollarSign, Map, Handshake,
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/PageHero";
import { ScrollReveal } from "@/hooks/useScrollAnimation";

import heroAbout from "@/assets/deck/photo-factory.webp";
import photoVijay from "@/assets/deck/team-vijay.webp";
import photoSubramanian from "@/assets/deck/team-subramanian.webp";
import photoAnirudh from "@/assets/deck/team-anirudh.webp";

const verticals = [
  { icon: Boxes, title: "Mechanical Components", desc: "Metal & plastic manufacturing at scale." },
  { icon: PenTool, title: "Tool & Die Design", desc: "In-house tool, die and mould development." },
  { icon: Factory, title: "Contract Manufacturing", desc: "Complex, high-precision parts under contract." },
  { icon: TrendingDown, title: "Cost Optimization", desc: "Design-for-manufacturing & cost engineering support." },
];

const team = [
  {
    photo: photoVijay,
    name: "Vijay Ragavalu",
    role: "Chief Executive Officer",
    bio: "30+ years of manufacturing leadership driving automation, operational optimization, and sustainable engineering. Expert in vendor negotiations, process improvement, and large-scale team management. Previously Managing Director at Aa Vee and Senior Executive at Samudhura Industries, Chennai.",
  },
  {
    photo: photoSubramanian,
    name: "Subramanian R",
    role: "Chief Financial Officer",
    bio: "Certified Chartered Accountant and Cost Accountant with 27 years of experience in manufacturing finance across automotive, industrial, and consumer goods. Builds finance, reporting, and accounting systems for greenfield companies.",
  },
  {
    photo: photoAnirudh,
    name: "Anirudh Ravi Narayanan",
    role: "Director",
    bio: "Sets strategy and owns execution. Drives end-to-end manufacturing strategy, operations, and capacity expansion. Accountable for the P&L across precision engineering, contract manufacturing, tooling, and export markets.",
  },
];

const strategicValue = [
  { icon: Layers, title: "End-to-End Ownership", desc: "Tool design, forming, machining, fabrication, plastic tooling, EDM, and metrology — one platform, one accountable partner." },
  { icon: Gauge, title: "Repeatability at Scale", desc: "Machine-driven and process-led. High repeatability, tight tolerances, and scalable output across all target sectors." },
  { icon: TrendingDown, title: "Cost & Cycle Advantage", desc: "In-house engineering and tooling depth drive cost optimization, shorter development cycles, and productivity gains." },
  { icon: Handshake, title: "Long-Term Partner", desc: "Not a job shop. A Tier-1-ready manufacturing partner for programmes measured in years, not quarters." },
  { icon: DollarSign, title: "~$85B Addressable Market", desc: "Across component and product manufacturing, tool design & development, and contract manufacturing." },
  { icon: Map, title: "Positioned to Win", desc: "Supporting India's localization, industrial growth, and manufacturing self-reliance agenda." },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <PageHero
        image={heroAbout}
        title="Machine-Driven, Process-Led Manufacturing"
        subtitle="Booma Manufacturing operates as a Tier-1 ready manufacturing platform, supporting customers from tool development and prototyping to scalable serial production."
      />

      {/* Who we are */}
      <section className="py-16 sm:py-20 bg-background section-soft">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto">
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-primary">Who We Are</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Booma Manufacturing Pvt. Ltd. is a machine-driven, process-led manufacturing platform —
              composite laminations, plastic moulds, press tools, pressure die-casting dies, precision machining,
              fabrication and pipe bending, from prototype to Tier-1 serial production across automotive,
              industrial, appliances and defence.
            </p>
          </ScrollReveal>

          {/* Verticals */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {verticals.map((v, i) => (
              <ScrollReveal key={v.title} variant="fade-up" delay={i * 70}>
                <div className="rounded-xl glass-card p-6 h-full hover:border-secondary/50 transition-colors">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                    <v.icon className="w-5 h-5" />
                  </div>
                  <h3 className="mt-4 font-bold text-primary">{v.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Ambition banner */}
          <ScrollReveal variant="fade" delay={150}>
            <div className="mt-6 relative overflow-hidden rounded-2xl bg-primary px-6 py-8 sm:px-10 text-center">
              <div className="pointer-events-none absolute -right-10 -top-12 w-56 h-56 rounded-full bg-secondary/20 blur-3xl" />
              <div className="pointer-events-none absolute -left-10 -bottom-12 w-56 h-56 rounded-full bg-blue-400/10 blur-3xl" />
              <span className="relative text-[11px] font-bold uppercase tracking-[0.2em] text-secondary">Our Ambition</span>
              <p className="relative mt-2 text-lg sm:text-2xl font-semibold text-white max-w-3xl mx-auto leading-snug">
                "To be India's Tier-1 manufacturing partner across automotive, EV, industrial, appliances and defence."
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 sm:py-20 bg-muted section-soft">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fade-up" className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-primary">Experienced Manufacturing Leadership</h2>
            <p className="mt-4 text-muted-foreground">Decades of combined expertise driving Booma Manufacturing's growth.</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((m, i) => (
              <ScrollReveal key={m.name} variant="fade-up" delay={i * 120}>
                <div className="rounded-2xl glass-card p-8 text-center h-full industrial-shadow">
                  <div className="mx-auto h-32 w-32 rounded-full overflow-hidden ring-4 ring-secondary/20 bg-primary">
                    <img src={m.photo} alt={m.name} className="h-full w-full object-cover" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-primary">{m.name}</h3>
                  <p className="text-secondary font-semibold text-sm mt-1">{m.role}</p>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed text-left">{m.bio}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Value */}
      <section className="py-16 sm:py-20 bg-background section-soft">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fade-up" className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-primary">Why Partner with Booma Manufacturing?</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {strategicValue.map((s, i) => (
              <ScrollReveal key={s.title} variant="fade-up" delay={i * 70}>
                <div className="rounded-xl glass-card p-7 h-full hover:border-secondary/50 transition-colors industrial-shadow">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                    <s.icon className="w-6 h-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-primary">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
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

export default About;
