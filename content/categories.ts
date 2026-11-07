import { photos } from "@/lib/images";
import type { CategoryPage } from "./types";

export const categoryPages: CategoryPage[] = [
  {
    slug: "christmas-decor",
    navLabel: "Christmas Decor",
    title: "Christmas Decor",
    eyebrow: "The house in December",
    description:
      "Tree recipes, colour stories, table styling and outdoor lighting — written as decorating advice, not a catalogue dump. Each recommendation is here because it changes how a room feels, not because it fills a grid.",
    seoTitle: "Christmas Home Decor Ideas and Tree Styling | Merry wears.",
    seoDescription:
      "Editorial Christmas decorating ideas: red and white trees, velvet bows, ornaments, tablescapes, outdoor lighting and luxury looks on a real budget.",
    heroImage: photos.treeLit,
    heroAlt: "A glowing indoor Christmas tree styled with warm white lights",
    subcategories: [
      {
        name: "Christmas tree decorations",
        description: "Lights first, then ribbon, then ornaments in three sizes.",
        image: photos.ornaments,
        imageAlt: "Close styling of Christmas ornaments and ribbon",
      },
      {
        name: "Red and white Christmas themes",
        description: "A classic palette that still looks current when finishes are mixed.",
        image: photos.treeWhite,
        imageAlt: "A pale Christmas tree with red accents",
      },
      {
        name: "Candy cane decorations",
        description: "Use stripe sparingly so it reads graphic, not carnival.",
        image: photos.wrappedGifts,
        imageAlt: "Red and white wrapped gifts",
      },
      {
        name: "Velvet bows and ribbons",
        description: "The fastest upgrade from 'decorated' to 'styled'.",
        image: photos.gifts,
        imageAlt: "Ribbon-tied holiday gifts",
      },
      {
        name: "Christmas ornaments",
        description: "Build a mix of matte, glass and a few heirlooms.",
        image: photos.ornaments,
        imageAlt: "A collection of Christmas ornaments",
      },
      {
        name: "Outdoor Christmas decorations",
        description: "One strong idea at the door beats a mixed light display.",
        image: photos.homeExterior,
        imageAlt: "A house facade with warm evening light",
      },
      {
        name: "Christmas table styling",
        description: "Low centrepieces, unscented candles, cloth napkins.",
        image: photos.familyTable,
        imageAlt: "A festive dining table",
      },
      {
        name: "Minimalist Christmas decor",
        description: "Fewer objects, better lighting, more negative space.",
        image: photos.livingNeutral,
        imageAlt: "A calm, uncluttered living room",
      },
      {
        name: "Luxury Christmas decorations",
        description: "Luxury is usually texture, scale and restraint — not more glitter.",
        image: photos.livingChristmas,
        imageAlt: "An elegantly decorated Christmas living room",
      },
    ],
    guides: [
      {
        title: "Start with light, not objects",
        text: "A room can feel festive with excellent lighting and almost no ornaments. The reverse is rarely true. Warm white lights on the tree, lamps at three heights, and candles after dusk do more than another tray of figurines.",
      },
      {
        title: "Choose one colour story",
        text: "Red and white, forest and champagne, or ivory and wood. Mixing every holiday colour in one room is how even expensive decorations start to look chaotic. Edit the palette, then vary the texture.",
      },
      {
        title: "Decorate in layers",
        text: "Tree, mantel, table, then the door. Finish one composition before starting the next. A half-decorated house with one beautiful tree photographs — and lives — better than five incomplete corners.",
      },
    ],
    productIds: [
      "velvet-tree-bows",
      "matte-glass-ornaments",
      "warm-white-lights",
      "linen-tree-skirt",
      "garland",
      "outdoor-lantern",
    ],
    articleSlugs: [
      "red-white-christmas-tree-decorating-ideas",
      "luxury-christmas-tree-on-a-budget",
      "decorate-christmas-tree-with-velvet-bows",
      "christmas-decorations-that-make-home-cozy",
      "beautiful-christmas-living-room",
    ],
  },
  {
    slug: "festive-fashion",
    navLabel: "Festive Fashion",
    title: "Festive Fashion",
    eyebrow: "What to wear to the season",
    description:
      "Christmas clothing as editorial dressing: family photographs, couple outfits, pajamas you will not regret, and sweatshirts that still look like clothes. We favour colour, fabric and fit over novelty prints that expire on 26 December.",
    seoTitle: "Christmas Sweatshirts, Family Outfits and Holiday Style | Merry wears.",
    seoDescription:
      "Festive fashion ideas including matching family Christmas sweatshirts, couples outfits, pajamas and winter casual looks styled for real photographs.",
    heroImage: photos.knit,
    heroAlt: "A cream knit sweater photographed in soft natural light",
    subcategories: [
      {
        name: "Christmas sweatshirts",
        description: "Heavy cotton, quiet graphics, colours that photograph.",
        image: photos.beigeKnit,
        imageAlt: "A folded knit sweater",
      },
      {
        name: "Matching family Christmas sweatshirts",
        description: "Shared colour, not identical costumes.",
        image: photos.familyTable,
        imageAlt: "A family gathered around a festive table",
      },
      {
        name: "Couples Christmas outfits",
        description: "Coordinate silhouette and palette, keep personality.",
        image: photos.couple,
        imageAlt: "A couple dressed in complementary winter clothing",
      },
      {
        name: "Funny Christmas sweatshirts",
        description: "Dry humour, decent fabric, a print that sits small.",
        image: photos.fashion,
        imageAlt: "Casual winter clothing laid out for styling",
      },
      {
        name: "Christmas pajamas",
        description: "Cotton sets for Christmas morning photographs.",
        image: photos.bedroom,
        imageAlt: "A made bed with layered winter textiles",
      },
      {
        name: "Personalized festive clothing",
        description: "Names and dates only if the type is elegant.",
        image: photos.wardrobe,
        imageAlt: "Hanging clothes in a calm wardrobe",
      },
      {
        name: "Winter casual outfits",
        description: "The clothes between parties: knits, trousers, coats.",
        image: photos.portrait,
        imageAlt: "A winter portrait with a simple knit",
      },
    ],
    guides: [
      {
        title: "Photograph the outfit, not the joke",
        text: "Family pictures live for years. If the graphic will feel embarrassing in five albums, choose a better colour and a smaller motif. Matching works through palette: forest, cream, burgundy, charcoal.",
      },
      {
        title: "Fit is the real luxury",
        text: "An inexpensive sweatshirt that hangs from the shoulder looks more expensive than a heavily printed one that pulls across the chest. Size for drape. Steam before you shoot.",
      },
    ],
    productIds: [
      "family-sweatshirts",
      "couples-knit",
      "holiday-pajamas",
      "funny-sweatshirt",
      "throw-blanket",
    ],
    articleSlugs: [
      "matching-christmas-sweatshirts-for-family",
      "christmas-outfit-ideas-for-couples",
    ],
  },
  {
    slug: "home-living",
    navLabel: "Home & Living",
    title: "Home & Living",
    eyebrow: "Rooms you can actually live in",
    description:
      "Christmas should sit on top of a livable home, not replace it. These notes cover bedrooms, living rooms, kitchens, lighting and the unglamorous storage that makes next year easier.",
    seoTitle: "Cozy Winter Home Decor and Christmas Living Rooms | Merry wears.",
    seoDescription:
      "Cozy bedroom essentials, Christmas living room styling, festive kitchens, candles, lighting and home organisation for a calmer holiday house.",
    heroImage: photos.cozyInterior,
    heroAlt: "A layered living room with warm lighting and winter textiles",
    subcategories: [
      {
        name: "Cozy bedroom essentials",
        description: "Lamps, weighty bedding, a throw at the foot of the bed.",
        image: photos.bedroom,
        imageAlt: "A calm bedroom with layered linens",
      },
      {
        name: "Christmas living room styling",
        description: "Tree placement, traffic flow and seating that still works.",
        image: photos.livingChristmas,
        imageAlt: "A living room styled for Christmas",
      },
      {
        name: "Festive kitchen decoration",
        description: "A garland, a candle, a bowl of fruit. Then stop.",
        image: photos.kitchen,
        imageAlt: "A kitchen with warm wood and ceramics",
      },
      {
        name: "Winter home accessories",
        description: "Throws, trays, baskets and objects you will keep.",
        image: photos.sofa,
        imageAlt: "A sofa with a folded throw",
      },
      {
        name: "Seasonal candles and lighting",
        description: "Warm bulbs, lamps in corners, unscented tapers at dinner.",
        image: photos.lights,
        imageAlt: "Warm string lights in a dark room",
      },
      {
        name: "Home organisation",
        description: "Labelled boxes, ribbon kept on a card, lights coiled.",
        image: photos.livingNeutral,
        imageAlt: "An organised, uncluttered interior",
      },
    ],
    guides: [
      {
        title: "Keep surfaces useful",
        text: "If a coffee table cannot take a mug, the decorating has gone too far. Leave landing spots. Holiday houses still need somewhere to put keys, books and a laptop.",
      },
      {
        title: "Scent is a design decision",
        text: "One seasonal candle in the living room is plenty. Keep kitchens and dining tables unscented. Layer pine from a real clipping if you want atmosphere without perfume.",
      },
    ],
    productIds: [
      "throw-blanket",
      "taper-candles",
      "scented-candle",
      "organisation-baskets",
      "garland",
      "warm-white-lights",
    ],
    articleSlugs: [
      "christmas-decorations-that-make-home-cozy",
      "beautiful-christmas-living-room",
      "luxury-christmas-tree-on-a-budget",
    ],
  },
];

export function getCategory(slug: string) {
  return categoryPages.find((page) => page.slug === slug);
}
