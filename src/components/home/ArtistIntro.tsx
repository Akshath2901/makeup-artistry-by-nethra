import Link from "next/link";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { Ornament } from "@/components/ui/Ornament";
import { artist } from "@/content/home";
import { site } from "@/content/site";
import { SectionMarker } from "@/components/graphics/motifs";

/**
 * Meet the artist: typography-led. Her own words are set large, as the
 * section's image; a framed portrait slot waits for her real photograph
 * (never a stock image: that would misrepresent who she is).
 */
export function ArtistIntro() {
  return (
    <section aria-labelledby="artist-title" className="page-container section-space">
      <SectionMarker index="01" label="The artist" />

      <div className="page-grid mt-12 gap-y-14 lg:mt-20">
        <div className="col-span-4 sm:col-span-8 lg:col-span-7">
          <h2 id="artist-title" className="text-eyebrow text-muted" data-reveal="rise">
            Meet {site.artistName}
          </h2>
          <blockquote className="text-statement mt-6 italic" data-reveal="text">
            <p className="placeholder-text">{artist.intro}</p>
          </blockquote>
          <Ornament className="mt-10" />
          <p className="text-lead mt-8 max-w-(--container-prose) text-muted" data-reveal="rise">
            <span className="placeholder-text">{artist.story}</span>
          </p>
          <p className="mt-8" data-reveal="rise">
            <Link href="/about" className="link-text text-label inline-flex min-h-11 items-center">
              About the artist →
            </Link>
          </p>
        </div>

        <div className="col-span-3 col-start-2 sm:col-span-4 sm:col-start-5 lg:col-span-4 lg:col-start-9 lg:mt-32">
          <div className="arch-mask">
            <PhotoPlaceholder
              ratio="2:3"
              label={artist.photo.subject}
              composition={artist.photo.composition}
              treatment={artist.photo.treatment}
              reveal="scroll"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
