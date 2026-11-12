import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/layout/PlaceholderPage";

export const metadata: Metadata = { title: "Privacy notice" };

export default function PrivacyPage() {
  return (
    <PlaceholderPage title="Privacy notice" stage="Stage 10">
      <p className="placeholder-text">[TBD: Plain-language privacy notice]</p>
    </PlaceholderPage>
  );
}
