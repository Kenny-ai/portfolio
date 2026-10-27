import type { MetadataRoute } from 'next';
import { projects } from '@/lib/portfolio';
import { siteUrl } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  // Never publish an invented domain or localhost as the canonical public URL.
  return siteUrl ? [{ url: siteUrl.href, changeFrequency: 'monthly', priority: 1 }, ...projects.map(project => ({ url: new URL(`/projects/${project.slug}`, siteUrl).href, changeFrequency: 'monthly' as const, priority: 0.8 }))] : [];
}
