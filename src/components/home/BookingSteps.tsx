import type { CSSProperties } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { bookingSteps } from "@/content/home";

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

/**
 * Section 06 — "What happens after I message?" (Phase 2). A numbered
 * sequence joined by a fine line that draws as the visitor reads:
 * vertical on phones, horizontal on desktop. Only step one is approved;
 * the rest are visible placeholders until the client confirms them.
 */
export function BookingSteps({ index = "04" }: { index?: string } = {}) {
  return (
    <section aria-labelledby="booking-title" className="page-container section-space">
      <SectionHeading index={index} label="Booking" title="How booking works" id="booking-title" />

      <div className="relative mt-12 lg:mt-20">
        {/* Connecting lines: vertical on phones and tablets, horizontal on desktop. */}
        <span className="fine-line-y absolute top-2 bottom-2 left-[0.3125rem] lg:hidden" data-scrub="draw-y" aria-hidden="true" />
        <span className="fine-line absolute top-[0.3125rem] right-0 left-0 max-lg:hidden" data-reveal="line" aria-hidden="true" />

        <ol className="flex flex-col gap-10 lg:grid lg:grid-cols-4 lg:gap-6">
          {bookingSteps.map((step, i) => {
            const pending = step.title.startsWith("[TBD");
            return (
              <li key={step.title} className="relative pl-10 lg:pt-12 lg:pl-0" data-reveal="rise" style={delay(i * 120)}>
                <span
                  className={`absolute top-1 left-0 size-[0.6875rem] lg:top-0 rounded-full border ${
                    pending ? "border-muted bg-paper" : "border-ink bg-ink"
                  }`}
                  aria-hidden="true"
                />
                <p className="text-caption text-muted tabular-nums">Step {String(i + 1).padStart(2, "0")}</p>
                <h3 className="text-h3 mt-2">
                  {pending ? <span className="placeholder-text">{step.title}</span> : step.title}
                </h3>
                <p className="text-body mt-2 max-w-[32ch] text-muted">
                  {step.detail.startsWith("[TBD") ? <span className="placeholder-text">{step.detail}</span> : step.detail}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
