import { photos } from "@/lib/images";
import type { GiftGuide } from "./types";

export const giftGuides: GiftGuide[] = [
  {
    slug: "christmas-gifts-for-her",
    title: "Christmas Gifts for Her",
    excerpt:
      "A framework for choosing presents that feel considered: things she will use in January, not only unwrap in December.",
    audience: "Partners, daughters, sisters, friends",
    budgetNote: "Edit by usefulness, not by a fake price point.",
    advice: [
      "Start with how she actually spends evenings: reading, cooking, bathing, dressing, hosting.",
      "Upgrade a daily object before buying a new category she did not ask for.",
      "If you are unsure, choose fibre, scent or paper — they are easy to wrap and hard to get completely wrong.",
      "Avoid novelty that only makes sense on Christmas Day.",
    ],
    productIds: ["scented-candle", "journal", "cashmere-socks", "throw-blanket", "mug-set"],
    relatedArticleSlugs: [
      "thoughtful-christmas-gifts-for-her",
      "christmas-gift-ideas-under-30",
    ],
    image: photos.gifts,
    imageAlt: "Wrapped gifts with ribbon on a table",
    seoTitle: "Thoughtful Christmas Gifts for Her | Merry wears.",
    seoDescription:
      "A buying guide to Christmas gifts for her, with editorial advice and placeholder product recommendations you can swap for Amazon listings.",
  },
  {
    slug: "christmas-gifts-for-him",
    title: "Christmas Gifts for Him",
    excerpt:
      "Skip the joke gadgets. Look for warmth, tools he will keep, and objects that improve a routine he already has.",
    audience: "Partners, sons, fathers, friends",
    budgetNote: "Quality in a small category beats a large object he did not want.",
    advice: [
      "Think in routines: morning coffee, winter walking, weekend cooking, the desk he actually uses.",
      "Clothing gifts work when the size is certain and the graphic is quiet.",
      "If he is hard to buy for, improve something he already uses rather than introducing a hobby.",
    ],
    productIds: ["mug-set", "journal", "funny-sweatshirt", "outdoor-lantern", "cashmere-socks"],
    relatedArticleSlugs: ["christmas-gift-ideas-under-30", "unique-stocking-stuffer-ideas"],
    image: photos.wrappedGifts,
    imageAlt: "Presents wrapped in kraft paper and ribbon",
    seoTitle: "Christmas Gift Ideas for Him | Merry wears.",
    seoDescription:
      "Practical Christmas gifts for him, with a focus on useful objects, winter clothing and stocking-friendly ideas.",
  },
  {
    slug: "gifts-for-couples",
    title: "Gifts for Couples",
    excerpt:
      "The best couple gifts are shared experiences at home: a better table, better light, something both people will touch.",
    audience: "Two-person households",
    budgetNote: "One generous shared object is better than two mediocre personal ones.",
    advice: [
      "Host gifts: candles, a throw, a pair of mugs, a decent lantern for the stoop.",
      "Matching outfits only if they already dress in a similar register.",
      "Do not buy couples a chore. Storage can wait unless they asked.",
    ],
    productIds: ["couples-knit", "taper-candles", "mug-set", "throw-blanket"],
    relatedArticleSlugs: ["christmas-outfit-ideas-for-couples", "beautiful-christmas-living-room"],
    image: photos.couple,
    imageAlt: "A couple in coordinated winter clothing",
    seoTitle: "Christmas Gifts for Couples | Merry wears.",
    seoDescription:
      "Shared Christmas gift ideas for couples, from table lighting to coordinated knits and objects for the home.",
  },
  {
    slug: "gifts-for-parents",
    title: "Gifts for Parents",
    excerpt:
      "Parents are often drowning in objects. Give something that reduces friction or adds warmth to a room they already love.",
    audience: "Mothers, fathers, in-laws",
    budgetNote: "Time, comfort and fewer things to store.",
    advice: [
      "A better throw, better socks, a candle they would not buy themselves.",
      "If they host, improve the table: tapers, a garland, cloth they will reuse.",
      "Personalised clothing only with elegant type and a colour they wear.",
    ],
    productIds: ["throw-blanket", "garland", "scented-candle", "organisation-baskets"],
    relatedArticleSlugs: ["thoughtful-christmas-gifts-for-her", "christmas-decorations-that-make-home-cozy"],
    image: photos.livingChristmas,
    imageAlt: "A warmly decorated family living room",
    seoTitle: "Christmas Gifts for Parents | Merry wears.",
    seoDescription:
      "Calm, useful Christmas gifts for parents: comfort, hosting pieces and storage that makes January easier.",
  },
  {
    slug: "gifts-for-children",
    title: "Gifts for Children",
    excerpt:
      "We do not pretend to review toys we have not handled. This guide covers clothing, pajamas and small objects that photograph well and get used.",
    audience: "Children and the adults buying for them",
    budgetNote: "Fit, fabric and a print you will not mind in photographs.",
    advice: [
      "Pajamas and sweatshirts are the clothing gifts that get worn immediately.",
      "Leave room in stockings for something they chose, not only something you styled.",
      "Avoid claiming educational or safety benefits we cannot verify.",
    ],
    productIds: ["holiday-pajamas", "family-sweatshirts", "journal", "cashmere-socks"],
    relatedArticleSlugs: [
      "matching-christmas-sweatshirts-for-family",
      "unique-stocking-stuffer-ideas",
    ],
    image: photos.familyTable,
    imageAlt: "A festive family table setting",
    seoTitle: "Family Christmas Gift Ideas for Children | Merry wears.",
    seoDescription:
      "Christmas gift ideas for children focused on pajamas, family outfits and small useful objects — without fake toy reviews.",
  },
  {
    slug: "family-christmas-gifts",
    title: "Family Christmas Gifts",
    excerpt:
      "Gifts the household shares: a better tree ritual, matching loungewear, a living room that feels finished.",
    audience: "Households shopping together",
    budgetNote: "Spend on the thing everyone will see every evening in December.",
    advice: [
      "A coordinated pajama or sweatshirt set if you take a Christmas morning photograph.",
      "Lights, a tree skirt and a garland change the house more than individual trinkets.",
      "One shared board game or recipe journal can be enough if the wrapping is beautiful.",
    ],
    productIds: [
      "family-sweatshirts",
      "holiday-pajamas",
      "warm-white-lights",
      "linen-tree-skirt",
    ],
    relatedArticleSlugs: [
      "matching-christmas-sweatshirts-for-family",
      "luxury-christmas-tree-on-a-budget",
    ],
    image: photos.treeLit,
    imageAlt: "A family Christmas tree glowing in a living room",
    seoTitle: "Family Christmas Gifts and Matching Outfits | Merry wears.",
    seoDescription:
      "Shared family Christmas gift ideas, from matching sweatshirts to tree lighting and Christmas morning pajamas.",
  },
  {
    slug: "budget-gifts-under-25",
    title: "Budget Gifts Under $25",
    excerpt:
      "A modest budget still allows a present that feels chosen. Focus on socks, paper, mugs and candles — and skip anything that feels like filler.",
    audience: "Secret Santa, colleagues, neighbours, stockings",
    budgetNote: "Stay under twenty-five dollars without looking like you did.",
    advice: [
      "Wrap generously. Presentation is free if you already have ribbon.",
      "One good object beats a basket of cheap ones.",
      "Read fibre content. Thin acrylic socks are how this budget looks stingy.",
    ],
    productIds: ["journal", "cashmere-socks", "mug-set", "scented-candle"],
    relatedArticleSlugs: ["christmas-gift-ideas-under-30", "unique-stocking-stuffer-ideas"],
    image: photos.ornaments,
    imageAlt: "Small holiday objects styled together",
    seoTitle: "Christmas Gift Ideas Under $25 | Merry wears.",
    seoDescription:
      "Budget Christmas gifts under $25 with advice on wrapping, fibre quality and avoiding filler presents.",
  },
  {
    slug: "gifts-under-50",
    title: "Gifts Under $50",
    excerpt:
      "The most useful band for most adults: a candle and a notebook, a better throw, a sweatshirt that will be worn on Boxing Day.",
    audience: "Friends, siblings, hosts",
    budgetNote: "Enough room for fabric and weight.",
    advice: [
      "This is the budget where clothing starts to make sense if you know the size.",
      "A throw or a pair of mugs feels generous without requiring inside knowledge.",
      "Do not inflate value with fake 'sets' of things they will not use.",
    ],
    productIds: ["throw-blanket", "family-sweatshirts", "mug-set", "scented-candle"],
    relatedArticleSlugs: ["thoughtful-christmas-gifts-for-her", "christmas-gift-ideas-under-30"],
    image: photos.beigeKnit,
    imageAlt: "A quality knit styled as a gift idea",
    seoTitle: "Christmas Gifts Under $50 | Merry wears.",
    seoDescription:
      "Christmas gifts under $50, including clothing, home textiles and objects that still feel considered.",
  },
  {
    slug: "premium-christmas-gifts",
    title: "Premium Christmas Gifts",
    excerpt:
      "Premium here means better materials and a longer life, not a luxury logo. We will not invent prices or designer endorsements.",
    audience: "When you want the present to last",
    budgetNote: "Spend on fibre, weight and finish. Add Amazon links only when you have a real listing.",
    advice: [
      "Cashmere-blend, heavy linen, proper tapers, a lantern with a finish you would keep.",
      "Premium is often one object, beautifully wrapped, with a note.",
      "If you cannot inspect the thing in person, read materials, dimensions and return policy — not star ratings copied from a marketplace.",
    ],
    productIds: [
      "throw-blanket",
      "velvet-tree-bows",
      "outdoor-lantern",
      "linen-tree-skirt",
      "couples-knit",
    ],
    relatedArticleSlugs: ["luxury-christmas-tree-on-a-budget", "thoughtful-christmas-gifts-for-her"],
    image: photos.modernHome,
    imageAlt: "A refined interior suggesting lasting, well-made objects",
    seoTitle: "Premium Christmas Gift Ideas | Merry wears.",
    seoDescription:
      "Premium Christmas gifts defined by materials and longevity, with editorial notes and placeholder Amazon-ready product cards.",
  },
  {
    slug: "unique-stocking-stuffers",
    title: "Unique Stocking Stuffers",
    excerpt:
      "A stocking should feel abundant without becoming landfill. Think texture, scent, paper and one thing they will use in the first week of January.",
    audience: "Every mantel",
    budgetNote: "Several small things, none of them junk.",
    advice: [
      "Include something edible only if you know dietary needs.",
      "A beautiful sock, a notebook, a small candle, a ribbon of their own.",
      "Leave air in the stocking. Overstuffing looks anxious.",
    ],
    productIds: ["cashmere-socks", "journal", "scented-candle", "stocking"],
    relatedArticleSlugs: ["unique-stocking-stuffer-ideas", "christmas-gift-ideas-under-30"],
    image: photos.lights,
    imageAlt: "Warm holiday lighting suggesting a mantel at night",
    seoTitle: "Unique Stocking Stuffer Ideas | Merry wears.",
    seoDescription:
      "Stocking stuffer ideas that feel considered: socks, paper, candles and objects worth unwrapping.",
  },
];

export function getGiftGuide(slug: string) {
  return giftGuides.find((guide) => guide.slug === slug);
}
