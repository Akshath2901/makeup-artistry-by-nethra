import { ArtistIntro } from "@/components/home/ArtistIntro";
import { BookingSteps } from "@/components/home/BookingSteps";
import { CLOSING_ID, ClosingEnquiry } from "@/components/home/ClosingEnquiry";
import { Hero } from "@/components/home/Hero";
import { MobileEnquiryBar } from "@/components/home/MobileEnquiryBar";
import { OccasionsBand } from "@/components/home/OccasionsBand";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { SignatureLooks } from "@/components/home/SignatureLooks";
import { WelcomeIntro } from "@/components/home/WelcomeIntro";
import { PageTransition } from "@/components/motion/PageTransition";
import { looks } from "@/content/portfolio";

/**
 * Home: welcome → discover the artist → see the looks → understand the
 * services → know what happens next → enquire on WhatsApp.
 * "Kind words" (Phase 2) is left out until genuine reviews with
 * permission exist.
 */
export default function HomePage() {
  const signature = ["heirloom-red", "soft-gold", "evening-rose", "after-dark"]
    .map((slug) => looks.find((look) => look.slug === slug)!)
    .filter(Boolean);

  return (
    <>
      <WelcomeIntro />
      <PageTransition>
        <Hero />
        <ArtistIntro />
        <SignatureLooks items={signature} />
        <OccasionsBand />
        <ServicesPreview />
        <BookingSteps />
        <ClosingEnquiry />
        <MobileEnquiryBar afterId="opening" hideWhenIds={[CLOSING_ID]} />
      </PageTransition>
    </>
  );
}
