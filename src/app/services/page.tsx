import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/layout/PlaceholderPage";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <PlaceholderPage title="Services" stage="Stage 6">
      <p className="placeholder-text">[TBD: Confirmed service list, inclusions and pricing decision]</p>
    </PlaceholderPage>
  );
}
