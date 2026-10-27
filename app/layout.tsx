import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import { siteUrl } from '@/lib/site';
import { themeInitScript } from '@/lib/themes';

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: siteUrl, alternates: { canonical: '/' } } : {}),
  title: 'Kenny Soyoye — Software Developer',
  description: 'Kenny Soyoye is a software developer with about five years of experience building and shipping web products, mobile apps, and backend systems. Lead Product Engineer at Inawo.',
  twitter: { card: 'summary_large_image', title: 'Kenny Soyoye — Software Developer', description: 'Web, mobile, and backend systems.' },
  openGraph: {
    title: 'Kenny Soyoye — Software Developer',
    description: 'About five years building and shipping web, mobile, and backend products. Explore Kenny Soyoye’s work and product leadership at Inawo.',
    type: 'website',
    siteName: 'Kenny Soyoye — Software Developer',
    ...(siteUrl ? { url: siteUrl } : {}),
  },
};

export const viewport: Viewport = { themeColor: '#f4f2eb' };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-theme="studio" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeInitScript }} /></head>
      <body>{children}</body>
    </html>
  );
}
