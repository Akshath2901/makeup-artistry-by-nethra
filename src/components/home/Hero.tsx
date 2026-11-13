import Link from "next/link";
import { BackdropArch, LotusDivider } from "@/components/graphics/motifs";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { Photo } from "@/components/ui/Photo";
import { hero } from "@/content/home";
import { brand, enquireHref } from "@/content/site";
import { HeroMotion } from "./HeroMotion";

/**
 * The opening, continuing straight from the welcome's palace doors.
 *
 * The portrait stands in the brand's palace-arch silhouette, with a
 * larger faint arch drawn behind it (an arch within an arch, echoing the
 * welcome) and a small arch medallion holding a close crop of the same
 * photograph. The brand is set beside it, never over the makeup.
 *
 * Phones: the arch portrait first (height capped so the action reaches
 * the first screen), the brand below. Desktop: portrait right, brand low
 * in the left margin.
 *
 * Motion lives in HeroMotion (one GSAP timeline that waits for the welcome
 * doors). Elements marked data-prehide start hidden only when motion is on.
 */
export function Hero() {
  const detail = { ...hero.photo, focus: "50% 24%", zoom: 2.2 };

  return (
    <section id="opening" aria-labelledby="hero-title" className="relative overflow-hidden">
      <div className="page-container lg:page-grid pt-6 lg:min-h-[calc(100svh-var(--header-height))] lg:items-end lg:pt-8">
        {/* Portrait in the palace arch */}
        <div className="relative lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:self-stretch lg:pb-10">
          <BackdropArch className="-top-[4%] left-1/2 h-[108%] w-auto -translate-x-1/2 opacity-80" />
          <div className="hero-photo relative mx-auto w-[86%] sm:w-[60%] lg:h-full lg:w-full" data-hero-image data-prehide>
            <Photo
              brief={hero.photo}
              ratio="4:5"
              ratioLg="2:3"
              sizes="(min-width: 1024px) 40vw, 86vw"
              priority
              shape="arch"
              className="lg:aspect-auto! lg:h-full"
            />
          </div>

          {/* Arch medallion: a close crop of the same photograph */}
          <div
            className="arch-mask absolute right-0 -bottom-8 w-[30%] bg-paper p-1.5 sm:right-[14%] sm:w-[20%] lg:right-auto lg:bottom-[16%] lg:-left-[14%] lg:w-[30%] lg:p-2"
            data-hero-detail
            data-prehide
          >
            <Photo brief={detail} ratio="4:5" sizes="(min-width: 1024px) 14vw, 30vw" tag={false} shape="arch" />
          </div>
        </div>

        {/* The brand, and the one action */}
        <div className="pt-12 pb-10 lg:col-span-6 lg:col-start-1 lg:row-start-1 lg:pt-0 lg:pb-20">
          <p className="text-eyebrow flex flex-wrap items-center gap-x-3 gap-y-1 text-muted" data-hero-meta data-prehide>
            <span>{brand.artistName}</span>
            <span className="fine-line w-6" aria-hidden="true" />
            <span>
              {brand.specialisation} · {brand.city}
            </span>
          </p>
          <h1 id="hero-title" className="mt-4 lg:mt-8" data-hero-title data-prehide>
            <span className="text-statement block font-light">{brand.wordmark.primary}</span>
            <span className="text-statement block font-light italic text-muted">{brand.wordmark.secondary}</span>
          </h1>
          <div data-hero-meta data-prehide>
            <LotusDivider reveal="enter" className="mt-5 w-52 lg:mt-10" />
            <p className="text-lead mt-3 font-serif italic text-muted lg:mt-5">{hero.positioning}</p>
          </div>
          <div
            className="mt-6 flex flex-col gap-2 min-[400px]:flex-row min-[400px]:items-center min-[400px]:gap-8 lg:mt-10"
            data-hero-meta
            data-prehide
          >
            <Link href={enquireHref} className="btn-primary">
              <WhatsAppIcon />
              Enquire on WhatsApp
            </Link>
            <Link href="/portfolio" className="link-text text-label inline-flex min-h-11 items-center self-start min-[400px]:self-auto">
              See the portfolio
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll cue: a hairline that grows, desktop only */}
      <div className="pointer-events-none absolute bottom-4 left-1/2 hidden h-12 w-px overflow-hidden lg:block" aria-hidden="true">
        <span className="fine-line-y h-full bg-ink/40" data-hero-cue data-prehide />
      </div>

      <HeroMotion />
    </section>
  );
}
