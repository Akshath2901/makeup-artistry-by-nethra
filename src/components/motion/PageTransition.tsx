import { ViewTransition, type ReactNode } from "react";

/**
 * Subtle page transition: the old page fades out quickly and the new one
 * fades and rises in (styles in globals.css). Wrap each page's content
 * in this, not the layout, because layouts persist across navigations.
 * Browsers without view transitions simply navigate; reduced motion
 * turns the animation off.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <ViewTransition enter="page-enter" exit="page-exit" default="none">
      <div>{children}</div>
    </ViewTransition>
  );
}
