import type { MetadataRoute } from "next";
import { getNoteSlugs } from "@/lib/notes";
import { getWorkSlugs } from "@/lib/works";

export const dynamic = "force-static";

const BASE_URL = "https://yushizehuohuo-gif.github.io/huohuoweb";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [workSlugs, noteSlugs] = await Promise.all([
    getWorkSlugs(),
    getNoteSlugs(),
  ]);

  return [
    { url: `${BASE_URL}/`, priority: 1 },
    { url: `${BASE_URL}/works/`, priority: 0.8 },
    ...workSlugs.map((slug) => ({
      url: `${BASE_URL}/works/${slug}/`,
      priority: 0.7,
    })),
    { url: `${BASE_URL}/notes/`, priority: 0.8 },
    ...noteSlugs.map((slug) => ({
      url: `${BASE_URL}/notes/${slug}/`,
      priority: 0.6,
    })),
  ];
}
