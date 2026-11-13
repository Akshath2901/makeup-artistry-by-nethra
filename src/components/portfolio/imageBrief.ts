import type { PhotoBrief } from "@/components/ui/Photo";
import { isDemo, type Crop, type PortfolioImage } from "@/content/portfolio";

/** Turns a registered portfolio image into a Photo brief. */
export function imageBrief(image: PortfolioImage, crop?: Crop): PhotoBrief {
  return {
    subject: image.subject,
    composition: image.subject,
    treatment: "",
    src: image.src,
    alt: image.alt,
    focus: crop?.focus ?? image.focus,
    zoom: crop?.zoom,
    demo: isDemo(image),
  };
}
