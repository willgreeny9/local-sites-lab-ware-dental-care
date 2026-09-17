import type { MetadataRoute } from "next";
import { conceptHost } from "@/lib/business";

const base = conceptHost;

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/services",
    "/services/general",
    "/services/cosmetic",
    "/services/specialist",
    "/services/orthodontics",
    "/services/hygienist",
    "/fees",
    "/team",
    "/find-us",
    "/about",
    "/testimonials",
    "/contact",
    "/referrals",
    "/privacy",
  ];
  return paths.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));
}
