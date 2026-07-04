import type { MetadataRoute } from "next";

// TODO: replace with your real deployed domain once you have one
const siteUrl = "https://your-portfolio.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
