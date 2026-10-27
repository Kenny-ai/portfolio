import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import { themeInitScript } from '@/lib/themes';

export const metadata: Metadata = {
  title: 'Kenny Soyoye — Software Developer',
  description: 'Kenny Soyoye is a software developer building thoughtful websites, useful products, and the systems behind them.',
  openGraph: {
    title: 'Kenny Soyoye — Software Developer',
    description: 'A little creative. A lot of code. Explore selected websites and software projects.',
    type: 'website',
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
