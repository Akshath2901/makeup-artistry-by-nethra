import Image from "next/image";
import { PhotoPlaceholder, ratioClasses, type PhotoRatio } from "./PhotoPlaceholder";

/** What the client needs to supply for one image slot. */
export type PhotoBrief = {
  subject: string;
  composition: string;
  treatment: string;
  /** Real photo in /public, e.g. "/photos/hero.jpg". Leave unset until supplied. */
  src?: string;
  /** Required with src: describe the look, not "makeup photo". */
  alt?: string;
  /** Keep faces and makeup in frame when cropping, e.g. "50% 30%". */
  focus?: string;
};

/**
 * One image slot. Shows a labelled placeholder until the client's photo
 * is added, then a responsive, optimised next/image in the same box, so
 * the layout never changes and nothing shifts while loading.
 */
export function Photo({
  brief,
  ratio,
  ratioSm,
  ratioLg,
  sizes,
  priority = false,
  reveal,
  className = "",
}: {
  brief: PhotoBrief;
  ratio: PhotoRatio;
  ratioSm?: PhotoRatio;
  ratioLg?: PhotoRatio;
  /** Rendered width per breakpoint, so phones download small files. */
  sizes: string;
  /** Only for the first image on screen (the hero). */
  priority?: boolean;
  reveal?: "scroll" | "enter";
  className?: string;
}) {
  if (!brief.src) {
    return (
      <PhotoPlaceholder
        ratio={ratio}
        ratioSm={ratioSm}
        ratioLg={ratioLg}
        label={brief.subject}
        composition={brief.composition}
        treatment={brief.treatment}
        reveal={reveal}
        className={className}
      />
    );
  }

  return (
    <div
      className={`relative overflow-hidden bg-rule ${ratioClasses(ratio, ratioSm, ratioLg)} ${reveal === "enter" ? "enter-image" : ""} ${className}`}
      data-reveal={reveal === "scroll" ? "image" : undefined}
    >
      <Image
        src={brief.src}
        alt={brief.alt ?? ""}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
        style={brief.focus ? { objectPosition: brief.focus } : undefined}
      />
    </div>
  );
}
