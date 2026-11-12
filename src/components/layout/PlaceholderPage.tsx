import type { CSSProperties, ReactNode } from "react";
import { PageTransition } from "@/components/motion/PageTransition";

/**
 * Temporary page used until each page is built in its own stage.
 * It proves navigation, page transitions and the shared layout work.
 */
export function PlaceholderPage({
  title,
  stage,
  children,
}: {
  title: string;
  stage: string;
  children?: ReactNode;
}) {
  return (
    <PageTransition>
      <section className="page-container section-space">
        <p className="text-caption enter-rise text-muted">Placeholder · built in {stage}</p>
        <h1 className="text-h1 enter-text mt-4 max-w-[18ch]" style={{ "--delay": "80ms" } as CSSProperties}>
          {title}
        </h1>
        <div className="text-lead enter-rise mt-6 max-w-(--container-prose) text-muted" style={{ "--delay": "200ms" } as CSSProperties}>
          {children}
        </div>
      </section>
    </PageTransition>
  );
}
