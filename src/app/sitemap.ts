import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { blogPosts } from "@/data/blogPosts";

/** Data da última revisão de conteúdo de cada página. Atualize ao editar o texto da página. */
const pages: { path: string; lastModified: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", lastModified: "2026-10-11", priority: 1.0, changeFrequency: "weekly" },
  { path: "/moara", lastModified: "2026-10-11", priority: 0.95, changeFrequency: "monthly" },
  { path: "/concierge-hospitalar", lastModified: "2026-10-11", priority: 0.9, changeFrequency: "monthly" },
  { path: "/atendimento-beira-leito", lastModified: "2026-10-11", priority: 0.9, changeFrequency: "monthly" },
  { path: "/concierge-virtual", lastModified: "2026-10-11", priority: 0.85, changeFrequency: "monthly" },
  { path: "/moara-home", lastModified: "2026-10-12", priority: 0.7, changeFrequency: "monthly" },
  { path: "/chamada-de-enfermagem", lastModified: "2026-10-11", priority: 0.85, changeFrequency: "monthly" },
  { path: "/resultados", lastModified: "2026-10-11", priority: 0.85, changeFrequency: "monthly" },
  { path: "/experiencia-do-paciente", lastModified: "2026-10-11", priority: 0.8, changeFrequency: "monthly" },
  { path: "/automacao-hospitalar", lastModified: "2026-10-11", priority: 0.8, changeFrequency: "monthly" },
  { path: "/solucoes-hospitalares", lastModified: "2026-10-11", priority: 0.7, changeFrequency: "monthly" },
  { path: "/sobre-nos", lastModified: "2026-10-11", priority: 0.7, changeFrequency: "monthly" },
  { path: "/parceiros-e-depoimentos", lastModified: "2026-10-11", priority: 0.6, changeFrequency: "monthly" },
  { path: "/contato", lastModified: "2026-10-11", priority: 0.6, changeFrequency: "yearly" },
  { path: "/blog", lastModified: "2026-10-11", priority: 0.7, changeFrequency: "weekly" },
  { path: "/privacy", lastModified: "2026-10-14", priority: 0.2, changeFrequency: "yearly" },
  { path: "/terms", lastModified: "2025-01-01", priority: 0.2, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...pages.map((page) => ({
      url: `${SITE_URL}${page.path === "/" ? "" : page.path}`,
      lastModified: page.lastModified,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    ...blogPosts.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: post.updated ?? post.date,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
