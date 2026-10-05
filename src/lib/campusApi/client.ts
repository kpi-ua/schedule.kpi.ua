const TIMEOUT_MS = 5000;
const RETRY_DELAY_MS = 300;

const getBaseUrl = () => process.env.CAMPUS_API_URL ?? 'https://api.campus.kpi.ua';
const getApiKey = () => process.env.CAMPUS_API_KEY;

const fetchOnce = async <T>(path: string): Promise<T> => {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS);
  const apiKey = getApiKey();

  try {
    const response = await fetch(getBaseUrl() + path, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...(apiKey ? { 'X-Api-Key': apiKey } : {}),
      },
      signal: controller.signal,
      // Caching is handled explicitly by lib/campusApi/cache.ts, not the platform fetch cache.
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`Campus API error: ${response.status} for ${path}`);
    }

    return (await response.json()) as T;
  } finally {
    clearTimeout(timeout);
  }
};

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// One retry after a short backoff; a single Campus outage should fail fast, not pile up.
export const campusGet = async <T>(path: string): Promise<T> => {
  try {
    return await fetchOnce<T>(path);
  } catch {
    await delay(RETRY_DELAY_MS);
    return fetchOnce<T>(path);
  }
};
