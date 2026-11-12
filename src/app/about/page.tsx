import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/layout/PlaceholderPage";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <PlaceholderPage title="About" stage="Stage 6">
      <p className="placeholder-text">[TBD: The artist&apos;s story, in her own words]</p>
    </PlaceholderPage>
  );
}
