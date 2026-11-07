import { photos } from "@/lib/images";
import type { Article } from "./types";

export const articlesPartB: Article[] = [
  {
    slug: "christmas-outfit-ideas-for-couples",
    title: "Christmas Outfit Ideas for Couples",
    excerpt:
      "Couples do not need to dress as a set. They need a shared temperature: the same formality, a related colour, and clothes they can sit down in.",
    category: "festive-fashion",
    tags: ["Christmas outfit ideas", "couples", "Christmas sweatshirts"],
    publishedAt: "2025-11-09",
    updatedAt: "2025-11-09",
    readingMinutes: 8,
    heroImage: photos.couple,
    heroAlt: "A couple dressed in complementary winter clothing",
    pinImage: "/pins/couples-outfits.svg",
    pinAlt: "Vertical pin artwork for Christmas outfit ideas for couples",
    seoTitle: "Christmas Outfit Ideas for Couples | Merry wears.",
    seoDescription:
      "Couples Christmas outfit ideas that coordinate without costume matching, for dinners, portraits and Christmas morning.",
    relatedProductIds: ["couples-knit", "family-sweatshirts", "holiday-pajamas"],
    relatedArticleSlugs: [
      "matching-christmas-sweatshirts-for-family",
      "thoughtful-christmas-gifts-for-her",
    ],
    body: [
      {
        type: "p",
        text: "The internet is full of couples in identical reindeer jumpers. That can be fun for a party with a dress code. It is rarely the most flattering way to walk into a family dinner. Coordination is kinder: two people who look as if they left the same house, which they did.",
      },
      {
        type: "h2",
        text: "Agree on the occasion first",
      },
      {
        type: "p",
        text: "Christmas Eve church, a steakhouse, a living room with cousins, a photograph in the garden — these are different clothes. Decide the most formal moment of the day and dress to that, then soften. It is easier to take off a blazer than to invent formality in a sweatshirt at the last minute.",
      },
      {
        type: "h2",
        text: "Share a colour temperature",
      },
      {
        type: "p",
        text: "Both in warm tones (cream, camel, burgundy, forest) or both in cool (charcoal, black, icy white). One person in neon novelty and the other in black tie is how photographs split in half. You can still wear different garments. You should not wear different seasons.",
      },
      {
        type: "h2",
        text: "Three reliable formulas",
      },
      {
        type: "h3",
        text: "The knit conversation",
      },
      {
        type: "p",
        text: "One cream roll-neck, one forest cardigan or sweatshirt. Same family of wool. This works for almost every informal American Christmas and does not require anyone to 'match'.",
      },
      {
        type: "h3",
        text: "The dinner version",
      },
      {
        type: "p",
        text: "Dark trousers on both, a silk or satin blouse against a merino knit, a shared metal in the jewellery or belt. Keep the Christmas cue to a velvet bow, a sprig, a deep red lip — not a printed slogan.",
      },
      {
        type: "h3",
        text: "Christmas morning",
      },
      {
        type: "p",
        text: "Pajamas or matching lounge sets if you like the ritual. If you do not, a shared colour of sweatshirt is enough. Comfort wins. Nobody looks elegant while opening a stocking in stiff jeans.",
      },
      {
        type: "h2",
        text: "What to avoid",
      },
      {
        type: "list",
        items: [
          "His-and-hers slogans that only make sense to you.",
          "One person in a full costume and the other in office clothes.",
          "Brand-new shoes that will be in pain by dessert.",
          "Treating matching as a test of the relationship. It is clothes.",
        ],
      },
      { type: "products", ids: ["couples-knit", "holiday-pajamas", "funny-sweatshirt"] },
    ],
  },
  {
    slug: "thoughtful-christmas-gifts-for-her",
    title: "Thoughtful Christmas Gifts for Her",
    excerpt:
      "Thoughtfulness is evidence that you pay attention, not a category of product. Start with her actual days, then upgrade one of them.",
    category: "gift-guides",
    tags: ["Christmas gifts for her", "Christmas gift ideas", "thoughtful gifts"],
    publishedAt: "2025-11-10",
    updatedAt: "2025-11-10",
    readingMinutes: 9,
    heroImage: photos.gifts,
    heroAlt: "Carefully wrapped gifts with ribbon",
    pinImage: "/pins/gifts-for-her.svg",
    pinAlt: "Vertical pin artwork for thoughtful Christmas gifts for her",
    seoTitle: "Thoughtful Christmas Gifts for Her | Merry wears.",
    seoDescription:
      "A practical approach to Christmas gifts for her: how to choose useful, beautiful presents without relying on fake reviews or invented prices.",
    relatedProductIds: ["scented-candle", "journal", "throw-blanket", "cashmere-socks", "mug-set"],
    relatedArticleSlugs: ["christmas-gift-ideas-under-30", "unique-stocking-stuffer-ideas"],
    body: [
      {
        type: "p",
        text: "The least thoughtful gifts are the ones that could have been bought for anyone: a generic bath set, a mug with a joke, a jewellery tree from a checkout aisle. The most thoughtful gifts are often slightly boring to describe and excellent to live with. They improve a Tuesday in January.",
      },
      {
        type: "h2",
        text: "Ask what her evenings look like",
      },
      {
        type: "p",
        text: "If she reads, paper and a decent light matter more than another scented product. If she cooks, upgrade a tool she uses weekly. If she stays cold, fibre is the brief: a throw, socks, a sweatshirt in a colour she already wears. Do not buy her a new hobby in wrapping paper.",
      },
      {
        type: "h2",
        text: "Upgrade the daily object",
      },
      {
        type: "p",
        text: "A heavier mug, a clothbound notebook, a candle she would not spend on herself, better socks. These are not unimaginative. They are specific, especially when the colour is hers and the wrapping is careful. Imagination without usefulness is how cupboards fill up.",
      },
      {
        type: "quote",
        text: "If you cannot picture where it will live in her home, it is not ready to be wrapped.",
      },
      {
        type: "h2",
        text: "Clothing only with evidence",
      },
      {
        type: "p",
        text: "Buy clothes if you know the size, the shoulder, the length she prefers. A festive sweatshirt in the wrong size is not romantic. If you are unsure, stay with home objects or ask someone who does the laundry.",
      },
      {
        type: "h2",
        text: "Presentation is part of the gift",
      },
      {
        type: "p",
        text: "Kraft paper, a velvet ribbon, a handwritten note with one true sentence. You do not need luxury packaging from a brand. You need to look as if you were not in a hurry. That is the part people remember when the object itself is quiet.",
      },
      {
        type: "h2",
        text: "What we will not do here",
      },
      {
        type: "p",
        text: "We will not invent prices, claim a product is 'Amazon's choice', or paste customer-star ratings. When real affiliate listings are added, they will be labelled as recommendations with a clear disclosure. Until then, treat the cards below as editorial placeholders with original notes.",
      },
      { type: "products", ids: ["throw-blanket", "scented-candle", "journal", "cashmere-socks"] },
    ],
  },
  {
    slug: "christmas-gift-ideas-under-30",
    title: "Christmas Gift Ideas Under $30",
    excerpt:
      "A thirty-dollar ceiling is not an excuse for filler. It is a constraint that forces you to choose one good object and wrap it well.",
    category: "gift-guides",
    tags: ["Christmas gift ideas", "budget gifts", "stocking stuffers"],
    publishedAt: "2025-11-11",
    updatedAt: "2025-11-11",
    readingMinutes: 8,
    heroImage: photos.wrappedGifts,
    heroAlt: "Small wrapped presents stacked on a table",
    pinImage: "/pins/gifts-under-30.svg",
    pinAlt: "Vertical pin artwork for Christmas gifts under $30",
    seoTitle: "Christmas Gift Ideas Under $30 | Merry wears.",
    seoDescription:
      "Christmas gift ideas under $30 with advice on quality signals, wrapping and avoiding junk — without invented prices on specific products.",
    relatedProductIds: ["journal", "cashmere-socks", "mug-set", "scented-candle"],
    relatedArticleSlugs: ["thoughtful-christmas-gifts-for-her", "unique-stocking-stuffer-ideas"],
    body: [
      {
        type: "p",
        text: "Under thirty dollars is where a lot of Christmas shopping happens: colleagues, neighbours, cousins, Secret Santa, the extra person at the table. It is also where landfill is born. The way through is to buy fewer categories and inspect the materials.",
      },
      {
        type: "h2",
        text: "Quality signals that do not require a brand",
      },
      {
        type: "list",
        items: [
          "Fibre: wool, cotton, linen, a named wax. 'Soft' is not a fibre.",
          "Weight in the hand, even in a listing photograph: thick stoneware, a sewn notebook, a candle in a vessel you would keep.",
          "A simple design you could still give in five years.",
        ],
      },
      {
        type: "h2",
        text: "Reliable categories",
      },
      {
        type: "p",
        text: "Socks, notebooks, mugs, candles, ribbon, a small plant pot, good chocolate if you know the person eats it. These categories work because they are used up or used often. Avoid desk gadgets, cheap jewellery and anything that needs batteries you did not include.",
      },
      {
        type: "h2",
        text: "Do not fake the price",
      },
      {
        type: "p",
        text: "Marketplace prices move. We will not print a number next to a product we do not control. Use the thirty-dollar figure as your shopping brief, then confirm the live price on the retailer page before you buy. If a listing has crept over budget, choose a different object rather than stretching into something worse at twenty-nine.",
      },
      {
        type: "h2",
        text: "Wrap as if it cost more",
      },
      {
        type: "p",
        text: "A thirty-dollar gift in beautiful paper with a real ribbon feels more generous than a fifty-dollar gift in a gift bag with the receipt still inside. This is not a trick. It is respect.",
      },
      {
        type: "callout",
        title: "A note on sets",
        text: "A bundle of five mediocre things is not a better gift than one decent one. Sets are often how a budget is made to look full. Resist.",
      },
      { type: "products", ids: ["journal", "cashmere-socks", "mug-set", "scented-candle"] },
    ],
  },
  {
    slug: "beautiful-christmas-living-room",
    title: "How to Create a Beautiful Christmas Living Room",
    excerpt:
      "A living room still has to function: seating, traffic, a place for a glass. Christmas should intensify the room you have, not blockade it.",
    category: "home-living",
    tags: ["Christmas home decor", "cozy winter home decor", "living room styling"],
    publishedAt: "2025-11-12",
    updatedAt: "2025-11-12",
    readingMinutes: 9,
    heroImage: photos.livingChristmas,
    heroAlt: "A living room decorated for Christmas with a tree and warm light",
    pinImage: "/pins/living-room.svg",
    pinAlt: "Vertical pin artwork for Christmas living room styling",
    seoTitle: "How to Create a Beautiful Christmas Living Room | Merry wears.",
    seoDescription:
      "Christmas living room styling: where to put the tree, how to light the room, and how to decorate without losing the sofa.",
    relatedProductIds: ["garland", "throw-blanket", "taper-candles", "warm-white-lights", "linen-tree-skirt"],
    relatedArticleSlugs: [
      "christmas-decorations-that-make-home-cozy",
      "luxury-christmas-tree-on-a-budget",
    ],
    body: [
      {
        type: "p",
        text: "The living room is where American Christmas is actually spent: the tree, the television nobody admits they will turn on, the extra chairs, the wrapping paper. A beautiful version of that room is not a showhouse. It is a room that still has paths through it.",
      },
      {
        type: "h2",
        text: "Place the tree where people already look",
      },
      {
        type: "p",
        text: "The corner you see from the sofa and from the doorway is usually the right corner. Do not block the main walkway or the fireplace if you use it. Measure the tree's full width with branches tipped out, not the box width. A tree that crowds a sofa will be resented by week two.",
      },
      {
        type: "h2",
        text: "Build three layers of light",
      },
      {
        type: "p",
        text: "Tree lights, lamps, candles. If you only have the tree, the rest of the room falls into a hole. Keep table lamps on in the evening. Use candles where they cannot be knocked. The goal is a room that looks equally good with the television off.",
      },
      {
        type: "h2",
        text: "Decorate the mantel as a sentence, not a paragraph",
      },
      {
        type: "p",
        text: "A garland, a pair of objects with height, stockings if you hang them. Leave gaps. If the mantel is already full of family photographs, you may only need lights and one wreath above. Adding a miniature village on top of a life already in progress is how clutter starts.",
      },
      {
        type: "image",
        src: photos.cozyInterior,
        alt: "A living room with warm lighting and restrained decoration",
        caption: "Leave somewhere to sit. Leave somewhere to put a cup down.",
      },
      {
        type: "h2",
        text: "Textiles do more than ornaments",
      },
      {
        type: "p",
        text: "Swap in a heavier throw. If you add seasonal pillows, add two, not eight, and keep the sofa usable. A living room that cannot be sprawled on is not a Christmas living room; it is a foyer.",
      },
      {
        type: "h2",
        text: "A small room version",
      },
      {
        type: "p",
        text: "Choose a slimmer tree, hang stockings on a wall hook if the mantel is tiny, and put the extra dining chairs somewhere other than the only walkway. One excellent wreath and excellent lighting will carry a small room. Do not try to fit a catalogue image into a studio.",
      },
      { type: "products", ids: ["garland", "throw-blanket", "warm-white-lights", "taper-candles"] },
    ],
  },
  {
    slug: "unique-stocking-stuffer-ideas",
    title: "Unique Stocking Stuffer Ideas for the Holiday Season",
    excerpt:
      "A stocking is a short story, not a shopping bag. Fill it with a few things that feel chosen, then stop.",
    category: "gift-guides",
    tags: ["stocking stuffers", "Christmas gift ideas", "budget gifts"],
    publishedAt: "2025-11-13",
    updatedAt: "2025-11-13",
    readingMinutes: 7,
    heroImage: photos.lights,
    heroAlt: "Warm holiday lights suggesting a mantel at night",
    pinImage: "/pins/stocking-stuffers.svg",
    pinAlt: "Vertical pin artwork for unique stocking stuffer ideas",
    seoTitle: "Unique Stocking Stuffer Ideas | Merry wears.",
    seoDescription:
      "Stocking stuffer ideas that avoid junk: useful small objects, better materials, and a structure for filling a stocking with care.",
    relatedProductIds: ["stocking", "cashmere-socks", "journal", "scented-candle"],
    relatedArticleSlugs: ["christmas-gift-ideas-under-30", "thoughtful-christmas-gifts-for-her"],
    body: [
      {
        type: "p",
        text: "The unique stocking is not the one with the most surprising gadget. It is the one that does not contain a single object the recipient will throw away before New Year. Uniqueness, here, means attention: the right flavour of chocolate, the sock in the right size, the notebook in the colour of their actual bag.",
      },
      {
        type: "h2",
        text: "A simple structure",
      },
      {
        type: "list",
        items: [
          "Something to wear: socks, a hair ribbon, lip balm they already like.",
          "Something to use: a pen, a notebook, matches, a small candle.",
          "Something to eat, only if you are sure.",
          "One note. Paper is not filler when it has a sentence on it.",
        ],
      },
      {
        type: "h2",
        text: "Ideas that do not feel like leftover aisle stock",
      },
      {
        type: "p",
        text: "A beautiful sock. A clothbound pocket notebook. A travel candle with a scent they already wear. Seed packets for a person with a windowsill. A wooden comb. A packet of proper tea. None of these are novel. They feel novel because most stockings are full of plastic that does not belong to anyone.",
      },
      {
        type: "h2",
        text: "For children, without claiming what we cannot",
      },
      {
        type: "p",
        text: "We will not recommend specific toys we have not used, and we will not invent safety claims. Stick to clothing, books you have read, art supplies you would allow on your own table, and something they asked for. The stocking can be abundant in paper and fabric without becoming a toy catalogue.",
      },
      {
        type: "h2",
        text: "Do not overfill",
      },
      {
        type: "p",
        text: "A stocking that stands up on its own looks anxious. Leave it soft. The shape hanging on the mantel is part of the decoration; a stuffed sausage is not. If you have more to give, wrap a second parcel and put it under the tree.",
      },
      { type: "products", ids: ["stocking", "cashmere-socks", "journal", "scented-candle"] },
    ],
  },
];
