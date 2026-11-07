import { photos } from "@/lib/images";
import type { Collection } from "./types";

export const collections: Collection[] = [
  {
    slug: "christmas",
    season: "christmas",
    title: "Christmas Collection",
    description:
      "The opening season for Merry wears.: tree styling, festive dressing, gift editing and rooms that feel warm after dark.",
    active: true,
    image: photos.treeLit,
    imageAlt: "A warmly lit indoor Christmas tree with classic ornaments",
    href: "/christmas-decor",
  },
  {
    slug: "winter",
    season: "winter",
    title: "Winter Living",
    description:
      "Throws, lighting, quiet palettes and the pieces that keep a home feeling considered once the decorations come down.",
    active: true,
    image: photos.cozyInterior,
    imageAlt: "A calm, layered living room with warm winter textiles",
    href: "/home-living",
  },
  {
    slug: "valentines",
    season: "valentines",
    title: "Valentine's Day",
    description:
      "A future collection for table styling, small gifts and at-home evenings. The structure is ready when the season turns.",
    active: false,
    image: photos.tableSetting,
    imageAlt: "A softly lit dining table set for an intimate meal",
    href: "/inspiration",
  },
  {
    slug: "easter",
    season: "easter",
    title: "Easter",
    description:
      "A lighter palette, spring tables and family dressing will live here. Reserved for a later editorial drop.",
    active: false,
    image: photos.brunch,
    imageAlt: "A bright table with flowers and ceramic serving pieces",
    href: "/inspiration",
  },
  {
    slug: "autumn",
    season: "autumn",
    title: "Autumn",
    description:
      "The run-up to Christmas: texture, candlelight and the first layer of seasonal dressing.",
    active: false,
    image: photos.modernHome,
    imageAlt: "A warmly styled interior with natural materials",
    href: "/home-living",
  },
];
