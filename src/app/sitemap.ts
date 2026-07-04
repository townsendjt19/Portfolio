import type { MetadataRoute } from "next";

// TODO: replace with your real deployed domain once you have one
const siteUrl = "https://your-portfolio.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
