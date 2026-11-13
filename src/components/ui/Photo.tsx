import Image from "next/image";
import { ArchOutline } from "@/components/graphics/motifs";
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
  /** True for temporary demonstration photography (not the artist's work). */
  demo?: boolean;
  /** Crop closer: 2 shows half the width, centred on `focus`. */
  zoom?: number;
};

/** Visible label on demonstration photography, so it is never taken as the artist's work. */
export function DemoTag({ className = "" }: { className?: string }) {
  return (
    <span className={`demo-tag ${className}`} aria-hidden="true">
      Demonstration image
    </span>
  );
}

/**
 * One image slot. Shows a labelled placeholder until a photo is added,
 * then a responsive, optimised next/image in the same box, so the layout
 * never changes and nothing shifts while loading.
 */
export function Photo({
  brief,
  ratio,
  ratioSm,
  ratioLg,
  sizes,
  priority = false,
  reveal,
  parallax,
  tag = true,
  shape = "rect",
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
  /** Drift slightly with scroll (percent of the frame). */
  parallax?: number;
  /** Show the "Demonstration image" label (off only for tiny thumbnails on pages that carry the demo notice). */
  tag?: boolean;
  /** "arch": the brand's palace-arch silhouette, with a fine inner line. */
  shape?: "rect" | "arch";
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

  const alt = brief.demo ? `${brief.alt ?? ""} (Demonstration image.)` : (brief.alt ?? "");

  return (
    <div
      className={`relative overflow-hidden ${shape === "arch" ? "arch-mask bg-surface" : "bg-rule"} ${ratioClasses(ratio, ratioSm, ratioLg)} ${reveal === "enter" ? "enter-image" : ""} ${className}`}
      data-reveal={reveal === "scroll" ? "image" : undefined}
      data-scrub={parallax ? "parallax" : undefined}
      data-amount={parallax}
    >
      {/* Wrapper: motion (reveal scale, parallax, hover) moves this layer,
          while the crop (focus and zoom) stays on the image itself. */}
      <div className="absolute inset-0">
        <Image
          src={brief.src}
          alt={alt}
          fill
          sizes={sizes}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : undefined}
          className="object-cover"
          style={{
            objectPosition: brief.focus,
            ...(brief.zoom && brief.zoom > 1
              ? { transform: `scale(${brief.zoom})`, transformOrigin: brief.focus ?? "50% 50%" }
              : null),
          }}
        />
      </div>
      {shape === "arch" && <ArchOutline />}
      {brief.demo && tag && <DemoTag />}
    </div>
  );
}
