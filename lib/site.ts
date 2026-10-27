import { profile } from './portfolio';

/** The confirmed production domain is the default; an environment override is optional. */
export function getSiteUrl(): URL {
  const value = process.env.NEXT_PUBLIC_SITE_URL?.trim() || profile.website;
  const url = new URL(value);
  if (!['http:', 'https:'].includes(url.protocol) || url.username || url.password || url.search || url.hash || url.pathname !== '/') {
    throw new Error('NEXT_PUBLIC_SITE_URL must be an http(s) origin, for example https://portfolio.example.com');
  }
  return url;
}

export const siteUrl = getSiteUrl();
