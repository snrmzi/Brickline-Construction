import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/services", "/projects", "/estimate", "/about", "/contact"];
  return [
    ...pages.map((path) => ({ url: `${siteUrl}${path}` })),
    ...projects.map((p) => ({ url: `${siteUrl}/projects/${p.slug}` })),
  ];
}
