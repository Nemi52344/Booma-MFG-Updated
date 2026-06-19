import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import boomaLogo from "@/assets/booma-logo.png";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Capabilities", href: "/services" },
  { name: "Our Customers", href: "/products" },
  { name: "About", href: "/about" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 pt-3 sm:pt-4">
      <nav
        style={{ fontFamily: "'Montserrat', sans-serif" }}
        className={cn(
          "container mx-auto max-w-6xl rounded-2xl border px-4 sm:px-6 transition-all duration-300",
          scrolled
            ? "bg-primary/85 backdrop-blur-xl border-white/10 shadow-lg shadow-black/30"
            : "bg-white/5 backdrop-blur-xl border-white/15 shadow-lg shadow-black/10"
        )}
      >
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img src={boomaLogo} alt="Booma Manufacturing" className="h-9 sm:h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => {
              const active = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium transition-colors",
                    active
                      ? "text-primary-foreground"
                      : "text-primary-foreground/70 hover:text-primary-foreground"
                  )}
                >
                  {item.name}
                  {active && (
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 h-0.5 w-6 rounded-full bg-secondary" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button asChild className="rounded-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 text-primary-foreground/80 hover:text-primary-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 pt-2 border-t border-white/10">
            <div className="flex flex-col gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "px-4 py-3 text-base font-medium transition-colors rounded-lg",
                    location.pathname === item.href
                      ? "text-secondary bg-secondary/10"
                      : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-white/5"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild className="mt-3 rounded-full bg-secondary hover:bg-secondary/90">
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Get a Quote
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
