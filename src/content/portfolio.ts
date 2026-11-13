/**
 * Portfolio content: categories, the image register and the six looks.
 *
 * SIX PHOTOGRAPHS, EXACTLY (owner decision, Stage 5.1, 2026-11-13)
 * The whole site uses only the six images registered below. Do not add
 * more; reuse them with different crops (see `details` on each look).
 *
 * DEMONSTRATION PHOTOGRAPHY
 * All six are temporary stock photographs from Unsplash, used only so the
 * client preview looks complete. NONE of them is the artist's work, a
 * client of hers, or a real booking. Each is `status: "demo"`, and the
 * site shows a visible "Demonstration image" label on it.
 *
 * Licence: Unsplash License (https://unsplash.com/license). Unsplash does
 * not provide model releases, so every image MUST be replaced with the
 * artist's own photographs before public launch. See
 * docs/demo-photography.md.
 */

export type CategoryId = "royal" | "contemporary" | "cocktail" | "party" | "reception";

export type Category = {
  id: CategoryId;
  label: string;
  /** Short line that describes the category, not the artist. */
  intro: string;
};

/** Portfolio categories set by the project owner (2026-11-13). */
export const categories: Category[] = [
  { id: "royal", label: "Royal bridal", intro: "Rich reds, maroon and gold, and heirloom jewellery." },
  { id: "contemporary", label: "Contemporary bridal", intro: "Soft glam, luminous skin and a modern finish." },
  { id: "reception", label: "Engagement & reception", intro: "Pinks, gold and evening light." },
  { id: "cocktail", label: "Cocktail", intro: "Colour, shimmer and fashion-forward finishes." },
  { id: "party", label: "Party", intro: "Festive glow, from soft glam to bold colour." },
];

export type ImageStatus = "demo" | "client-verified";

export type PortfolioImage = {
  id: string;
  src: string;
  width: number;
  height: number;
  category: CategoryId;
  /** What the photograph shows (internal). */
  subject: string;
  /** Read aloud by screen readers: describe the look. */
  alt: string;
  /** Default crop focus (object-position): keeps the face in frame. */
  focus: string;
  /** Where the image is used on the site. */
  placement: string[];
  status: ImageStatus;
  source: {
    name: "Unsplash" | "Client";
    photographer?: string;
    url?: string;
    license?: string;
  };
};

const unsplash = (photographer: string, path: string) =>
  ({ name: "Unsplash", photographer, url: `https://unsplash.com${path}`, license: "Unsplash License" }) as const;

export const portfolioImages: PortfolioImage[] = [
  {
    id: "royal-04",
    src: "/photos/demo/demo-royal-04.jpg",
    width: 1065,
    height: 1600,
    category: "royal",
    subject: "Bride in red and gold with maang tikka and nath, hand raised near her face, red backdrop.",
    alt: "Bride in red and gold with a maang tikka and nose ring, one hennaed hand raised near her face.",
    focus: "50% 28%",
    placement: ["home: hero", "home: signature looks", "portfolio", "look: Heirloom red", "404"],
    status: "demo",
    source: unsplash("gurpreet singh", "/photos/a-woman-in-a-red-and-gold-bridal-outfit-Po-nggQqplE"),
  },
  {
    id: "royal-03",
    src: "/photos/demo/demo-royal-03.jpg",
    width: 1067,
    height: 1600,
    category: "royal",
    subject: "Smiling bride under a red and gold dupatta, white flowers behind.",
    alt: "Smiling bride under a red and gold dupatta, framed by white flowers.",
    focus: "50% 30%",
    placement: ["portfolio", "look: Gilded veil", "services", "home: closing"],
    status: "demo",
    source: unsplash("AMISH THAKKAR", "/photos/woman-in-red-and-gold-floral-hijab-lAY2TAhN06k"),
  },
  {
    id: "contemporary-01",
    src: "/photos/demo/demo-contemporary-01.jpg",
    width: 1067,
    height: 1600,
    category: "contemporary",
    subject: "Smiling woman in layered gold necklaces and earrings, dark backdrop.",
    alt: "Smiling bride in layered gold necklaces and statement earrings against a dark backdrop.",
    focus: "50% 30%",
    placement: ["home: signature looks", "portfolio", "look: Soft gold", "services"],
    status: "demo",
    source: unsplash(
      "iKshana Productions",
      "/photos/a-smiling-woman-adorned-in-traditional-indian-jewelry-and-attire-KxHcyNOIO_M",
    ),
  },
  {
    id: "reception-02",
    src: "/photos/demo/demo-reception-02.jpg",
    width: 1067,
    height: 1600,
    category: "reception",
    subject: "Bride in a magenta and gold lehenga before ornate doors.",
    alt: "Bride in a magenta and gold lehenga standing before ornate carved doors.",
    focus: "50% 30%",
    placement: ["home: signature looks", "portfolio", "look: Evening rose", "services", "enquire"],
    status: "demo",
    source: unsplash("ARTO SURAJ", "/photos/a-woman-in-a-red-and-gold-bridal-outfit-Brte6H1scQk"),
  },
  {
    id: "cocktail-04",
    src: "/photos/demo/demo-cocktail-04.jpg",
    width: 1067,
    height: 1600,
    category: "cocktail",
    subject: "Profile with pink and violet eye makeup against a dark background.",
    alt: "Profile portrait with luminous pink and violet eye makeup against a dark background.",
    focus: "50% 35%",
    placement: ["home: signature looks", "portfolio", "look: After dark", "services"],
    status: "demo",
    source: unsplash("hosein zanbori", "/photos/a-woman-with-a-pink-and-purple-make-up-on-her-face-0o4QY48B-r0"),
  },
  {
    id: "party-01",
    src: "/photos/demo/demo-party-01.jpg",
    width: 1067,
    height: 1600,
    category: "party",
    subject: "Smiling woman in a green, red and gold sari, playfully covering one eye.",
    alt: "Smiling woman in a green, red and gold sari, playfully covering one eye, in warm light.",
    focus: "50% 30%",
    placement: ["portfolio", "look: Festive glow", "services", "about"],
    status: "demo",
    source: unsplash(
      "Bella Pon Fruitsia",
      "/photos/woman-in-green-gold-and-red-sari-dress-hiding-her-right-eye-while-smiling-y9HsMX3-mUY",
    ),
  },
];

const byId = new Map(portfolioImages.map((image) => [image.id, image]));

export function getImage(id: string): PortfolioImage {
  const image = byId.get(id);
  if (!image) throw new Error(`Unknown portfolio image: ${id}`);
  return image;
}

export function isDemo(image: PortfolioImage) {
  return image.status === "demo";
}

export function categoryLabel(id: CategoryId) {
  return categories.find((c) => c.id === id)?.label ?? id;
}

/** Fill an existing photo slot (keeps its shot-list notes) with a registered image. */
export function fillSlot<T extends { subject: string }>(slot: T, id: string, crop?: Crop) {
  const image = getImage(id);
  return {
    ...slot,
    src: image.src,
    alt: image.alt,
    focus: crop?.focus ?? image.focus,
    zoom: crop?.zoom,
    demo: isDemo(image),
  };
}

/** A crop of one photograph: where to look, and how close. */
export type Crop = { focus: string; zoom: number; label?: string };

export type Look = {
  /** URL segment: /portfolio/<slug>. */
  slug: string;
  category: CategoryId;
  title: string;
  /** Editorial description of the look in the photograph. */
  description: string;
  /** Short notes on the makeup visible in the photograph. */
  notes: string[];
  image: string;
  /** Close crops of the same photograph, used as "details". */
  details: [Crop, Crop];
};

/**
 * One look per photograph. Titles, descriptions and notes describe the
 * DEMONSTRATION photographs only, so they are demo copy too: rewrite them
 * with the artist when her own looks replace these images.
 */
export const looks: Look[] = [
  {
    slug: "heirloom-red",
    category: "royal",
    title: "Heirloom red",
    description:
      "A traditional bridal look built around red, gold and heirloom jewellery, where the makeup holds its own beside the maang tikka and nath.",
    notes: ["Defined, elongated eyes", "Even, luminous base", "Deep lip to match the lehenga"],
    image: "royal-04",
    details: [
      { focus: "50% 24%", zoom: 2.1, label: "The eyes" },
      { focus: "38% 62%", zoom: 1.9, label: "Henna and jewellery" },
    ],
  },
  {
    slug: "gilded-veil",
    category: "royal",
    title: "Gilded veil",
    description:
      "A joyful, classic bride: warm skin, soft definition and a smile framed by a red and gold dupatta and fresh flowers.",
    notes: ["Warm, glowing skin", "Softly lined eyes", "Classic red lip"],
    image: "royal-03",
    details: [
      { focus: "50% 30%", zoom: 2, label: "The smile" },
      { focus: "30% 18%", zoom: 1.8, label: "The dupatta" },
    ],
  },
  {
    slug: "soft-gold",
    category: "contemporary",
    title: "Soft gold",
    description: "A lighter, modern bridal finish: glowing skin, soft definition and jewellery that does the talking.",
    notes: ["Skin-first, radiant base", "Soft brown definition on the eyes", "Rosy, natural lip"],
    image: "contemporary-01",
    details: [
      { focus: "52% 26%", zoom: 2, label: "The glow" },
      { focus: "50% 72%", zoom: 1.7, label: "Layered gold" },
    ],
  },
  {
    slug: "evening-rose",
    category: "reception",
    title: "Evening rose",
    description:
      "Engagement and reception styling in magenta and gold, balanced for evening light and a long celebration.",
    notes: ["Rose and gold tones", "Luminous highlight", "Comfortable, long-wear finish"],
    image: "reception-02",
    details: [
      { focus: "50% 22%", zoom: 2.2, label: "Evening colour" },
      { focus: "50% 60%", zoom: 1.6, label: "Magenta and gold" },
    ],
  },
  {
    slug: "after-dark",
    category: "cocktail",
    title: "After dark",
    description:
      "Evening makeup with colour and light: jewel-toned shimmer on the lid, sculpted cheeks and a finish made for low light.",
    notes: ["Jewel-toned shimmer", "Sculpted cheekbones", "Polished, long-wear finish"],
    image: "cocktail-04",
    details: [
      { focus: "45% 30%", zoom: 2.3, label: "The shimmer" },
      { focus: "40% 45%", zoom: 1.8, label: "Sculpted cheek" },
    ],
  },
  {
    slug: "festive-glow",
    category: "party",
    title: "Festive glow",
    description: "Celebration makeup that stays fresh and photographs warmly, from daytime gatherings to the sangeet.",
    notes: ["Warm, glowing skin", "Defined lashes", "Bright, joyful lip"],
    image: "party-01",
    details: [
      { focus: "50% 26%", zoom: 2.1, label: "The eyes" },
      { focus: "50% 62%", zoom: 1.7, label: "Colour and gold" },
    ],
  },
];

export function getLook(slug: string) {
  return looks.find((look) => look.slug === slug);
}
