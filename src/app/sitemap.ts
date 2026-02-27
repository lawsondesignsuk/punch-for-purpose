import { MetadataRoute } from "next";
import { events } from "@/lib/events";

const baseUrl = "https://punchforpurpose.co.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/events", "/how-it-works", "/sign-up", "/tickets", "/about", "/faq", "/fundraising-guide", "/admin"].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const eventPages = events.map((event) => ({
    url: `${baseUrl}/events/${event.slug}`,
    lastModified: new Date(event.dateISO),
    changeFrequency: "daily" as const,
    priority: 0.9,
  }));

  return [...staticPages, ...eventPages];
}
