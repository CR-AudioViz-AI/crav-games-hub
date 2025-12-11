// ============================================================================
// CR AUDIOVIZ AI - GAMES HUB
// Root Layout
// ============================================================================

import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Games Hub | CR AudioViz AI',
    template: '%s | CR AudioViz AI Games Hub',
  },
  description: 'Discover, play, and create amazing games. 100 premium games across 10 categories. Build games here, host anywhere.',
  keywords: [
    'games',
    'gaming',
    'game hub',
    'arcade',
    'action games',
    'puzzle games',
    'strategy games',
    'game creator',
    'CR AudioViz AI',
    'indie games',
  ],
  authors: [{ name: 'CR AudioViz AI', url: 'https://craudiovizai.com' }],
  creator: 'CR AudioViz AI',
  publisher: 'CR AudioViz AI',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://games.craudiovizai.com',
    siteName: 'CR AudioViz AI Games Hub',
    title: 'Games Hub | CR AudioViz AI',
    description: 'Discover, play, and create amazing games. 100 premium games across 10 categories.',
    images: [
      {
        url: '/og-games-hub.png',
        width: 1200,
        height: 630,
        alt: 'CR AudioViz AI Games Hub',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Games Hub | CR AudioViz AI',
    description: 'Discover, play, and create amazing games.',
    images: ['/og-games-hub.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export const viewport: Viewport = {
  themeColor: '#0a0a0f',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-gaming-900 text-white antialiased">
        {/* Gaming Background Grid */}
        <div className="gaming-bg" aria-hidden="true" />
        
        {/* Scan Line Effect */}
        <div className="scan-line" aria-hidden="true" />
        
        {/* Main Content */}
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
