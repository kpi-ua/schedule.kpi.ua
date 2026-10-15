import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Розклад | КПІ ім. Ігоря Сікорського',
    short_name: 'Розклад',
    description: 'Розклад занять КПІ ім. Ігоря Сікорського',
    start_url: '/',
    display: 'standalone',
    background_color: '#1c396e',
    theme_color: '#1c396e',
    icons: [
      {
        src: '/web-app-manifest-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/web-app-manifest-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}
