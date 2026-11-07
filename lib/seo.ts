import type { Metadata } from "next";
import { site } from "@/content/site";
import { siteUrl } from "./utils";

export function createMetadata({
  title,
  description,
  path,
  image,
  imageAlt,
  type = "website",
  publishedTime,
  modifiedTime,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
}): Metadata {
  const url = siteUrl(path);
  const ogImage = image || "/pins/home-vertical.svg";

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: site.locale,
      type,
      publishedTime,
      modifiedTime,
      images: [
        {
          url: ogImage,
          width: 1000,
          height: 1500,
          alt: imageAlt || title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    other: {
      "pinterest:description": description,
    },
  };
}
