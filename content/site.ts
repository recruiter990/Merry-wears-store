import type { NavItem } from "./types";

export const site = {
  name: "Merry wears.",
  wordmark: "Merry & Cozy",
  legalName: "Merry wears.",
  tagline: "A Little Magic in Every Season.",
  description:
    "An editorial guide to Christmas decorations, festive fashion, thoughtful gifts and cozy home styling. Independent recommendations for creating unforgettable holiday moments.",
  locale: "en_US",
  defaultTitle: "Merry wears. | A Little Magic in Every Season",
  amazonAssociatesActive:
    process.env.NEXT_PUBLIC_AMAZON_ASSOCIATES_ACTIVE === "true",
  amazonAssociateStatement:
    "As an Amazon Associate I earn from qualifying purchases.",
  pinterestProfile: process.env.NEXT_PUBLIC_PINTEREST_PROFILE || "",
} as const;

export const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/christmas-decor", label: "Christmas Decor" },
  { href: "/festive-fashion", label: "Festive Fashion" },
  { href: "/gift-guides", label: "Gift Guides" },
  { href: "/home-living", label: "Home & Living" },
  { href: "/inspiration", label: "Inspiration" },
  { href: "/about", label: "About" },
];

export const footerNav = {
  explore: navItems.filter((item) => item.href !== "/about"),
  house: [
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
    { href: "/editorial-policy", label: "Editorial Policy" },
    { href: "/affiliate-disclosure", label: "Affiliate Disclosure" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/cookies", label: "Cookie Policy" },
    { href: "/terms", label: "Terms & Conditions" },
  ],
};

export const social = {
  pinterest: process.env.NEXT_PUBLIC_PINTEREST_PROFILE || "",
  instagram: "",
  email: process.env.CONTACT_EMAIL || "",
};

export const announcement =
  "Make This Holiday Season Extra Special ✨";
