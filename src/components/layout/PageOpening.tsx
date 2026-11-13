import type { ReactNode } from "react";
import { Ornament } from "@/components/ui/Ornament";
import { BackdropArch } from "@/components/graphics/motifs";

/**
 * The designed opening shared by inner pages: a running head, one large
 * statement revealed line by line, an ornament that draws in, and a lead.
 * The statement is pre-hidden before first paint (motion on only), so it
 * never flashes before animating.
 */
export function PageOpening({
  id,
  eyebrow,
  title,
  lead,
  aside,
}: {
  id: string;
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  /** Optional right-hand content on desktop (an image or a note). */
  aside?: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="page-container relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24">
      {!aside && <BackdropArch className="top-8 right-[3%] hidden h-full w-auto lg:block" />}
      <div className="page-grid gap-y-12 lg:items-end">
        <div className={`col-span-4 sm:col-span-8 ${aside ? "lg:col-span-7" : "lg:col-span-8"}`}>
          <p className="text-eyebrow enter-rise text-muted">{eyebrow}</p>
          <h1 id={`${id}-title`} className="text-statement mt-6" data-reveal="text" data-prehide>
            {title}
          </h1>
          <Ornament reveal="enter" className="mt-10" />
          {lead && (
            <div className="text-lead mt-8 max-w-(--container-prose) text-muted" data-reveal="rise">
              {lead}
            </div>
          )}
        </div>
        {aside && <div className="col-span-4 sm:col-span-6 sm:col-start-3 lg:col-span-4 lg:col-start-9">{aside}</div>}
      </div>
    </section>
  );
}
