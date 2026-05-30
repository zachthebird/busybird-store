import Link from "next/link";

const footerLinks = {
  shop: {
    title: "Shop",
    links: [
      { label: "All Products", href: "/shop" },
      { label: "Earrings", href: "/shop?category=earrings" },
      { label: "Necklaces", href: "/shop?category=necklaces" },
      { label: "Bracelets", href: "/shop?category=bracelets" },
    ],
  },
  about: {
    title: "About",
    links: [
      { label: "Our Story", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  help: {
    title: "Help",
    links: [
      { label: "FAQ", href: "/faq" },
      { label: "Shipping", href: "/shipping" },
      { label: "Accessibility", href: "/accessibility" },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
};

export function Footer() {
  return (
    <footer className="bg-dark text-neutral">
      <div className="container-page py-12 sm:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wider mb-4 text-white/60">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral/70 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/"
            className="font-accent text-2xl text-primary hover:text-primary-hover transition-colors"
          >
            BusyBird
          </Link>
          <p className="text-xs text-neutral/40">
            &copy; {new Date().getFullYear()} BusyBird. Handcrafted in Austin,
            Texas. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
