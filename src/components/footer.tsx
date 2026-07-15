import Link from "next/link";
import { categories, visibleProducts } from "@/lib/products";

const footerLinks = {
  shop: {
    title: "Shop",
    // Category links follow the storefront: deprecated lines with no visible
    // products drop out rather than pointing at an empty shop view.
    links: [
      { label: "All Products", href: "/shop" },
      ...categories
        .filter((cat) => visibleProducts.some((p) => p.category === cat.slug))
        .map((cat) => ({
          label: cat.name,
          href: `/shop?category=${cat.slug}`,
        })),
    ],
  },
  about: {
    title: "About",
    links: [
      { label: "Our Story", href: "/about" },
      { label: "Journal", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  help: {
    title: "Help",
    links: [
      { label: "FAQ", href: "/faq" },
      { label: "Shipping", href: "/shipping" },
      { label: "Returns", href: "/returns" },
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

const socialLinks = [
  {
    label: "Etsy",
    href: "https://busybird.etsy.com",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M8.5 4.5c-.5 0-1 .3-1.3.8L4.4 9.7c-.3.5-.4 1.1-.2 1.6l1.8 6.2c.2.7.8 1.2 1.5 1.2h9c.7 0 1.3-.5 1.5-1.2l1.8-6.2c.2-.5.1-1.1-.2-1.6l-2.8-4.4c-.3-.5-.8-.8-1.3-.8H8.5z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com/busybirdatx",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="bg-dark text-neutral">
      <div className="container-page py-12 sm:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
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
          {/* Connect / social */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider mb-4 text-white/60">
              Connect
            </h3>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-neutral/70 hover:text-primary transition-colors"
                  >
                    <span className="flex-shrink-0 opacity-60">{link.icon}</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
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
