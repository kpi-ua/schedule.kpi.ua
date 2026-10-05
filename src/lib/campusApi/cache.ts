import { logger } from '../logger';

const TTL_MS = 30 * 60 * 1000;

interface CacheEntry<T> {
  data: T;
  fetchedAt: number;
}

const store = new Map<string, CacheEntry<unknown>>();
const inFlight = new Map<string, Promise<unknown>>();

export const buildCacheKey = (path: string, params?: Record<string, string | undefined>): string => {
  if (!params) {
    return path;
  }

  const query = Object.keys(params)
    .filter((key) => params[key] !== undefined)
    .sort()
    .map((key) => `${key}=${params[key]}`)
    .join('&');

  return query ? `${path}?${query}` : path;
};

// 30-minute TTL per endpoint+params; on fetch failure, serve the stale copy (any age) and log it.
// Concurrent requests for the same key share a single in-flight fetch.
export const withCache = async <T>(key: string, fetcher: () => Promise<T>): Promise<T> => {
  const cached = store.get(key) as CacheEntry<T> | undefined;

  if (cached && Date.now() - cached.fetchedAt < TTL_MS) {
    return cached.data;
  }

  const pending = inFlight.get(key) as Promise<T> | undefined;
  if (pending) {
    return pending;
  }

  const promise = fetcher()
    .then((data) => {
      store.set(key, { data, fetchedAt: Date.now() });
      return data;
    })
    .catch((error: unknown) => {
      if (cached) {
        logger.warn('campus_api_stale_serve', {
          key,
          ageMs: Date.now() - cached.fetchedAt,
          error: error instanceof Error ? error.message : String(error),
        });
        return cached.data;
      }

      logger.error('campus_api_fetch_failed', {
        key,
        error: error instanceof Error ? error.message : String(error),
      });
      throw error;
    })
    .finally(() => {
      inFlight.delete(key);
    });

  inFlight.set(key, promise);

  return promise;
};
