import { ArtistIntro } from "@/components/home/ArtistIntro";
import { BookingSteps } from "@/components/home/BookingSteps";
import { CLOSING_ID, ClosingEnquiry } from "@/components/home/ClosingEnquiry";
import { Hero } from "@/components/home/Hero";
import { LooksAndDetails } from "@/components/home/LooksAndDetails";
import { MobileEnquiryBar } from "@/components/home/MobileEnquiryBar";
import { SelectedWork } from "@/components/home/SelectedWork";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { PageTransition } from "@/components/motion/PageTransition";

/**
 * Home: discover the artist → see the craft → understand services →
 * build confidence → enquire on WhatsApp. One primary action throughout.
 * "Kind words" (Phase 2) is left out until genuine reviews with
 * permission exist.
 */
export default function HomePage() {
  return (
    <PageTransition>
      <Hero />
      <ArtistIntro />
      <LooksAndDetails />
      <SelectedWork />
      <ServicesPreview />
      <BookingSteps />
      <ClosingEnquiry />
      <MobileEnquiryBar afterId="opening" hideWhenIds={[CLOSING_ID]} />
    </PageTransition>
  );
}
