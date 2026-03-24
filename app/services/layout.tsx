import type { ReactNode } from "react";

/**
 * Brand Awareness & Engagement – Route Layout
 *
 * Purpose:
 * - Wraps all pages under /services/brand-awareness-engagement
 * - MUST render {children} to avoid 404 / blank page
 * - Header & global styles are already handled by app/layout.tsx
 * - Keep this layout minimal and clean
 */
export default function BrandAwarenessLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <section className="w-full">
      {children}
    </section>
  );
}
