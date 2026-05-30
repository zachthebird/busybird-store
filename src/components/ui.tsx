import { type ReactNode } from "react";

/* ---- Badge ---- */
interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "accent" | "sale";
}

export function Badge({ children, variant = "default" }: BadgeProps) {
  const variants = {
    default: "bg-dark/10 text-dark",
    accent: "bg-accent-1/20 text-accent-1",
    sale: "bg-primary/15 text-primary",
  };

  return (
    <span
      className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]}`}
    >
      {children}
    </span>
  );
}

/* ---- Container ---- */
interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "footer";
}

export function Container({
  children,
  className = "",
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag className={`container-page ${className}`}>
      {children}
    </Tag>
  );
}

/* ---- Section ---- */
interface SectionProps {
  children: ReactNode;
  className?: string;
  bg?: string;
}

export function Section({ children, className = "", bg = "white" }: SectionProps) {
  const bgStyles: Record<string, string> = {
    neutral: "bg-neutral",
    white: "bg-white",
    dark: "bg-dark text-neutral",
    accent: "bg-accent-1/10",
  };

  const bgClass = bgStyles[bg] ?? bg;

  return (
    <section className={`section-padding ${bgClass} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

/* ---- Heading ---- */
interface HeadingProps {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
  accent?: boolean;
}

export function Heading({
  children,
  className = "",
  as: Tag = "h2",
  accent = false,
}: HeadingProps) {
  const fontClass = accent ? "font-accent" : "font-heading";

  const sizeClass = {
    h1: "text-4xl sm:text-5xl lg:text-6xl",
    h2: "text-3xl sm:text-4xl",
    h3: "text-xl sm:text-2xl",
  }[Tag];

  return (
    <Tag className={`${sizeClass} ${fontClass} ${className}`}>
      {children}
    </Tag>
  );
}

/* ---- Divider ---- */
export function Divider({ className = "" }: { className?: string }) {
  return <hr className={`border-dark/10 ${className}`} />;
}
