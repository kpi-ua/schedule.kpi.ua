import type { Metadata } from 'next';
import '../common/utils/dayjsSetup';
import { Exo_2 } from 'next/font/google';

import 'normalize.css/normalize.css';
import './globals.css';
import Analytics from '../components/Analytics';

const exo2Font = Exo_2({
  subsets: ['cyrillic', 'latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Розклад',
  description: 'Розклад занять. Розклад сесії. Розклад для викладачів.',
  appleWebApp: {
    title: 'Розклад',
  },
  icons: {
    icon: [
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  other: {
    'theme-color': '#000000',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk" className={exo2Font.className}>
      <body className="flex flex-col min-h-screen bg-white">{children}</body>
      <Analytics />
    </html>
  );
}
