import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/layout/PlaceholderPage";

export const metadata: Metadata = { title: "Enquire" };

export default function EnquirePage() {
  return (
    <PlaceholderPage title="Enquire on WhatsApp" stage="Stage 7">
      <p className="placeholder-text">
        [TBD: WhatsApp number and promised reply time]. The enquiry composer is built in Stage 7.
      </p>
    </PlaceholderPage>
  );
}
