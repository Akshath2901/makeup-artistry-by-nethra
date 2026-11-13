import { ViewTransition, type ReactNode } from "react";
import { MotionRoot } from "./MotionRoot";

/**
 * Wraps each page's content (not the layout, because layouts persist
 * across navigations):
 *
 * - Page transition: the old page fades out quickly and the new one fades
 *   and rises in (styles in globals.css). Browsers without view
 *   transitions simply navigate; reduced motion turns it off.
 * - Scroll choreography: MotionRoot lives here, as the page's last child,
 *   so its effect runs only after this page's content has hydrated. In the
 *   layout it ran too early, styled server HTML React had not hydrated yet,
 *   and caused hydration mismatches.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <ViewTransition enter="page-enter" exit="page-exit" default="none">
      <div>
        {children}
        <MotionRoot />
      </div>
    </ViewTransition>
  );
}
