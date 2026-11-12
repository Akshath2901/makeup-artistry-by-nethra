import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/layout/PlaceholderPage";

export const metadata: Metadata = { title: "Portfolio" };

export default function PortfolioPage() {
  return (
    <PlaceholderPage title="Portfolio" stage="Stage 5">
      <p className="placeholder-text">[TBD: Portfolio categories confirmed by the client]</p>
    </PlaceholderPage>
  );
}
