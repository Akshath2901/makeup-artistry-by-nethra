import Link from "next/link";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { artist } from "@/content/home";

/**
 * Section 02 — meet the artist. A portrait set slightly in from the edge,
 * paired with a few sentences in her own voice (set large, as a pull
 * quote) and a route to About.
 */
export function ArtistIntro() {
  return (
    <section aria-labelledby="artist-title" className="page-container section-space">
      <SectionHeading index="01" label="The artist" title="Meet the artist" id="artist-title" />

      <div className="page-grid mt-10 gap-y-10 lg:mt-16 lg:items-center">
        <div className="col-span-3 sm:col-span-4 lg:col-span-4 lg:col-start-2">
          <Photo
            brief={artist.photo}
            ratio="2:3"
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 75vw"
            reveal="scroll"
            className="photo-hover"
          />
        </div>

        <div className="col-span-4 sm:col-span-4 sm:self-end lg:col-span-5 lg:col-start-7 lg:self-center">
          <blockquote className="text-h2 font-light italic" data-reveal="text">
            <p className="placeholder-text">{artist.intro}</p>
          </blockquote>
          <p className="mt-8" data-reveal="rise">
            <Link href="/about" className="link-text text-label inline-flex min-h-11 items-center">
              About the artist
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
