import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ScrollReveal } from "@/hooks/useScrollAnimation";
import heroContact from "@/assets/deck/photo-machine2.webp";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
    });
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Layout>
      {/* Hero */}
      <PageHero
        image={heroContact}
        eyebrow="Contact"
        title="Ready to Build Together?"
        subtitle="Reach out to discuss your manufacturing requirements. Our team will respond within 24 hours."
      />

      {/* Contact Content */}
      <section className="py-20 bg-background section-soft">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <ScrollReveal variant="fade-left">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">Contact Information</h2>
                  <p className="text-muted-foreground">Reach out to us through any of the following channels.</p>
                </div>

                <div className="space-y-6">
                  {[
                    { icon: MapPin, title: "Address", content: <>Thirumudivakkam,<br />Tamil Nadu 600132, India</> },
                    { icon: Mail, title: "Email", content: <>info@booma-mfg.com</> },
                    { icon: Phone, title: "Phone", content: <>+91 XXXX XXXXXX</> },
                    { icon: Clock, title: "Business Hours", content: <>Mon – Sat: 9:00 AM – 6:00 PM IST<br />Sunday: Closed</> },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{item.title}</h3>
                        <p className="text-muted-foreground text-sm">{item.content}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-xs px-3 py-1.5 rounded-full bg-primary text-primary-foreground">AS9100D</span>
                  <span className="text-xs px-3 py-1.5 rounded-full bg-primary text-primary-foreground">ISO 9001:2015</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Contact Form */}
            <ScrollReveal variant="fade-right" className="lg:col-span-2">
              <div className="glass-card rounded-xl p-8">
                <h2 className="text-2xl font-bold text-card-foreground mb-6">Send an Inquiry</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" name="name" required placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" name="company" placeholder="Your company" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" name="email" type="email" required placeholder="you@company.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" name="phone" type="tel" placeholder="+91 XXXXX XXXXX" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea id="message" name="message" required rows={5} placeholder="Tell us about your manufacturing requirements..." />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : <>Send Inquiry <Send className="ml-2 w-4 h-4" /></>}
                  </Button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-16 sm:pb-20 bg-background section-soft">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fade-up" className="mb-6">
            <span className="inline-block px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.18em] bg-secondary/10 text-secondary">Find Us</span>
            <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-primary">Visit Our Facility</h2>
            <p className="mt-2 text-muted-foreground flex items-center gap-2">
              <MapPin className="w-4 h-4 text-secondary" /> Booma Manufacturing (Unit 2), Thirumudivakkam, Tamil Nadu 600132
            </p>
          </ScrollReveal>
          <ScrollReveal variant="fade" delay={120}>
            <div className="rounded-2xl overflow-hidden ring-1 ring-border industrial-shadow">
              <iframe
                title="Booma Manufacturing location"
                src="https://www.google.com/maps?q=Booma+Manufacturing+Unit+2,+Thirumudivakkam,+Tamil+Nadu+600132&output=embed"
                className="w-full h-[380px] sm:h-[440px]"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
