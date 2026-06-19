import { Link } from "react-router-dom";
import { ArrowRight, Wrench, Cpu, Zap, Boxes, Ruler } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/PageHero";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ScrollReveal } from "@/hooks/useScrollAnimation";

import heroServices from "@/assets/deck/photo-machining.webp";
import gVmc from "@/assets/deck/photo-vmc-cnc.webp";
import gTooling from "@/assets/deck/photo-tooling.webp";
import gPress from "@/assets/deck/photo-press-tool.webp";
import gFactory from "@/assets/deck/photo-factory.webp";
import gFab from "@/assets/deck/photo-fabrication.webp";
import gMachining from "@/assets/deck/photo-machining.webp";
import gProduction from "@/assets/deck/photo-production.webp";
import gQuality from "@/assets/deck/photo-quality.webp";

const matrix = [
  {
    key: "Forming & Fabrication",
    icon: Wrench,
    image: gFab,
    items: [
      { name: "Power Press", spec: "45T–400T (Mech + Hyd), 0.3–20 mm", apps: "Automotive, Industrial, Defense" },
      { name: "Press Brake", spec: "63T, 8 ft bed, 0.3–10 mm", apps: "Structural & Sheet Assemblies" },
      { name: "Pipe Bending", spec: "5-axis, Ø63 mm, 180°", apps: "Exhaust, Hydraulic, Structural" },
      { name: "Welding & Fabrication", spec: "MIG, TIG, ARC & Laser up to 1000A", apps: "Assemblies, Frames, Enclosures" },
      { name: "Laser Cutting", spec: "1.5 kW 3D, up to 3 mm", apps: "Automotive, Industrial, Consumer" },
    ],
  },
  {
    key: "Machining & Precision",
    icon: Cpu,
    image: gVmc,
    items: [
      { name: "VMC", spec: "2000×1500×500 mm, 4-axis", apps: "Multi-axis CNC, tight tolerances" },
      { name: "CNC Lathe", spec: "Ø350 × 400 mm", apps: "Shafts, Bushings, Custom parts" },
      { name: "Conventional Lathe", spec: "Ø150 × 500 mm", apps: "Turning, Facing, Threading" },
      { name: "DRO Machining", spec: "600×300×200 mm, 3-axis", apps: "Milling, slotting, profiling" },
      { name: "Drilling / Tapping", spec: "Ø3–32 mm / M3–M36", apps: "Holes, threads, fixturing" },
    ],
  },
  {
    key: "Tool Room & Advanced",
    icon: Zap,
    image: gTooling,
    items: [
      { name: "Wire EDM", spec: "600×400×275 mm, 4-axis", apps: "Dies, profiles, fine detail" },
      { name: "EDM", spec: "600×500×350 mm, 3-axis", apps: "Cavities, cores, tooling" },
      { name: "CNC EDM Twin Head", spec: "1000×600×400 mm", apps: "Large tool & die work" },
      { name: "Surface Grinding (L)", spec: "800×450×250 mm, 0.6T", apps: "Flat & precision grinding" },
      { name: "Surface Grinding (S)", spec: "150×190×150 mm", apps: "Tool & cutter grinding" },
    ],
  },
  {
    key: "Plastic Tooling & Moulding",
    icon: Boxes,
    image: gPress,
    items: [
      { name: "Tool Design", spec: "PowerShape, CREO, MouldX3D", apps: "Full design to trial support" },
      { name: "Injection Moulding", spec: "100T–1000T", apps: "Plastic components, Assemblies" },
      { name: "Materials", spec: "PP / ABS / PA / PC", apps: "Engineering-grade polymers" },
      { name: "Tool Manufacturing", spec: "CNC, EDM, Wirecut, Polish", apps: "Core, cavity, insert machining" },
      { name: "Output", spec: "Complete tool lifecycle", apps: "Prototyping → Production tooling" },
    ],
  },
  {
    key: "Quality & Metrology",
    icon: Ruler,
    image: gQuality,
    items: [
      { name: "CMM Bridge", spec: "1000×1500×800 mm, 3-axis", apps: "GD&T, surface finish verification" },
      { name: "CMM Arm", spec: "7-axis, 2500 mm reach", apps: "On-machine & large-part inspection" },
      { name: "Quality Assurance", spec: "In-process + final inspection", apps: "First article, In-process, Final" },
      { name: "Certifications", spec: "ISO 9001:2015 / AS9100D", apps: "Aerospace, Automotive, Defense" },
      { name: "Traceability", spec: "Full batch traceability", apps: "Secure & traceable production" },
    ],
  },
];

const portfolio = [
  { title: "Injection Tool Molds", desc: "Complete mold design, development, and serial production tooling." },
  { title: "Machined Components", desc: "CNC and conventional machined parts with tight tolerances." },
  { title: "PDC Products & Molds", desc: "Pressure die-casting dies and finished cast components." },
  { title: "Press Tool & Shop", desc: "Progressive, compound, and combination press tools." },
  { title: "Sheet Metal Products", desc: "Stamped, formed, and fabricated assemblies." },
  { title: "Pipe Bending Products", desc: "Precision 5-axis pipe bending for frames and tubes." },
];

const gallery = [
  { img: gVmc, label: "CNC Machining" },
  { img: gTooling, label: "Precision & Tooling" },
  { img: gPress, label: "Press Tools & Dies" },
  { img: gFactory, label: "Factory Floor" },
  { img: gFab, label: "Fabrication & Assembly" },
  { img: gMachining, label: "Mechanical Components" },
  { img: gProduction, label: "Production Line" },
  { img: gQuality, label: "Quality Assurance" },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <PageHero
        image={heroServices}
        eyebrow="Capabilities & Services"
        title="Manufacturing & Tooling Capability Matrix"
        subtitle="End-to-end manufacturing spanning 10+ specialized processes with advanced machinery across a 60,000 sq ft facility."
      />

      {/* Capability matrix */}
      <section className="py-16 sm:py-20 bg-background section-soft">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fade-up" className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.18em] bg-secondary/10 text-secondary">Technical Capabilities</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-primary">Equipment &amp; Processes</h2>
            <p className="mt-4 text-muted-foreground">
              Select a category to explore detailed specifications, work envelopes, and applications.
            </p>
          </ScrollReveal>

          <Tabs defaultValue={matrix[0].key} className="w-full">
            <TabsList className="flex flex-wrap h-auto justify-center gap-2 bg-transparent mb-8">
              {matrix.map((cat) => (
                <TabsTrigger
                  key={cat.key}
                  value={cat.key}
                  className="rounded-full border border-border px-5 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-primary"
                >
                  {cat.key}
                </TabsTrigger>
              ))}
            </TabsList>

            {matrix.map((cat) => (
              <TabsContent key={cat.key} value={cat.key} className="mt-0">
                <div className="rounded-2xl glass-card overflow-hidden industrial-shadow">
                  {/* Banner with category title */}
                  <div className="relative h-40 sm:h-48">
                    <img src={cat.image} alt={cat.key} className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/65 to-primary/25" />
                    <div className="absolute bottom-0 left-0 p-5 sm:p-6 flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 text-white backdrop-blur border border-white/25">
                        <cat.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{cat.key}</h3>
                        <p className="text-xs text-white/75">{cat.items.length} capabilities</p>
                      </div>
                    </div>
                  </div>
                  {/* Spec grid */}
                  <div className="p-5 sm:p-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {cat.items.map((item) => (
                      <div key={item.name} className="p-4 rounded-xl bg-muted/50 border border-border hover:border-secondary/40 transition-colors">
                        <p className="font-semibold text-foreground text-sm mb-2.5">{item.name}</p>
                        <p className="text-[10px] font-semibold text-secondary uppercase tracking-wider">Specification</p>
                        <p className="text-xs text-muted-foreground">{item.spec}</p>
                        <p className="mt-2 text-[10px] font-semibold text-secondary uppercase tracking-wider">Applications</p>
                        <p className="text-xs text-muted-foreground">{item.apps}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Product Portfolio */}
      <section className="py-16 sm:py-20 bg-muted section-soft">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fade-up" className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.18em] bg-secondary/10 text-secondary">Product Portfolio</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-primary">What We Manufacture</h2>
            <p className="mt-4 text-muted-foreground">
              Precision-manufactured components across every major production category.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio.map((p, i) => (
              <ScrollReveal key={p.title} variant="fade-up" delay={i * 70}>
                <div className="rounded-xl glass-card p-7 h-full hover:border-secondary/50 transition-colors industrial-shadow">
                  <div className="h-1 w-12 bg-secondary rounded-full" />
                  <h3 className="mt-5 text-lg font-bold text-primary">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 sm:py-20 bg-background section-soft">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fade-up" className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.18em] bg-secondary/10 text-secondary">Gallery</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-primary">Inside Our Facility</h2>
            <p className="mt-4 text-muted-foreground">
              Manufacturing processes, tooling, and quality infrastructure.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {gallery.map((g, i) => (
              <ScrollReveal key={g.label} variant="scale" delay={i * 60}>
                <div className="group relative overflow-hidden rounded-xl aspect-[4/3]">
                  <img src={g.img} alt={g.label} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
                  <span className="absolute bottom-3 left-4 text-sm font-semibold text-primary-foreground">{g.label}</span>
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

export default Services;
