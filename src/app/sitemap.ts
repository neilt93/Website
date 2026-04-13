import type { MetadataRoute } from "next";

const baseUrl = "https://neiltripathi.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/projects",
    "/papers",
    "/experience",
    "/interests",
    "/contact",
    "/blog",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" || route === "/about" ? 1 : 0.7,
  }));
}
