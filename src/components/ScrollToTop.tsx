import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scrolls to top on route change, or to the hash element if present (e.g. /about#contact).
 */
export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1);
      const scrollToHash = () => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          window.scrollTo(0, 0);
        }
      };
      requestAnimationFrame(() => requestAnimationFrame(scrollToHash));
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}
