import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/mentions-legales", "/cgv", "/confidentialite"].map((p) => ({
    url: `${siteUrl}${p}`,
  }));
}
