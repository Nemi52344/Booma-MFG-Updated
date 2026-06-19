import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import boomaLogo from "@/assets/booma-logo.webp";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary via-secondary/55 to-blue-400/60 backdrop-blur-xl border border-black/25 p-8 sm:p-10 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.7)]">
        {/* soft glass highlights */}
        <div className="pointer-events-none absolute -top-24 -left-16 w-72 h-72 rounded-full bg-secondary/10 blur-3xl" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/40 to-transparent" />
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Company Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <img src={boomaLogo} alt="Booma Manufacturing" className="h-10 w-auto" />
            </div>
            <p className="text-sm font-semibold tracking-wide text-primary-foreground/90">
              BOOMA MANUFACTURING PVT. LTD.
            </p>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              A Tier-1 ready manufacturing ecosystem delivering precision-engineered
              components across automotive, defense, industrial, and consumer sectors.
            </p>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-primary-foreground font-semibold mb-3">Pages</h3>
            <ul className="space-y-2 text-sm">
              {[
                { name: "Home", href: "/" },
                { name: "Capabilities", href: "/services" },
                { name: "Our Customers", href: "/products" },
                { name: "About Us", href: "/about" },
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-primary-foreground/60 hover:text-secondary transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-primary-foreground font-semibold mb-3">Industries</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li>Automotive &amp; EV</li>
              <li>Industrial Machinery</li>
              <li>Consumer Appliances</li>
              <li>Aerospace &amp; Defense</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-primary-foreground font-semibold mb-3">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-primary-foreground/60">
                <MapPin className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                <span>Thirumudivakkam, Tamil Nadu 600132</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/60">
                <Mail className="w-4 h-4 text-white flex-shrink-0" />
                <span>info@booma-mfg.com</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/60">
                <Phone className="w-4 h-4 text-white flex-shrink-0" />
                <span>+91 XXXX XXXXXX</span>
              </li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="text-xs px-2 py-1 rounded bg-primary-foreground/10 text-primary-foreground/80">AS9100D</span>
              <span className="text-xs px-2 py-1 rounded bg-primary-foreground/10 text-primary-foreground/80">ISO 9001:2015</span>
            </div>
          </div>
        </div>
        </div>

        <div className="mt-6 pt-6 text-center text-sm text-primary-foreground/55">
          <p>&copy; {new Date().getFullYear()} Booma Manufacturing Pvt. Ltd. All rights reserved. Designed for precision. Built for scale.</p>
        </div>
      </div>
    </footer>
  );
}
