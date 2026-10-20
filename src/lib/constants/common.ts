export const CACHE_TTL_ONE_MINUTE = 60;

// Cache lists for half an hour to update them in terms of rapid schedule changes (start of the year)
export const CACHE_TTL_HALF_AN_HOUR = 30 * CACHE_TTL_ONE_MINUTE;

// Cache time slots for quarter of a year (3 months)
export const CACHE_TTL_TIME_SLOTS = 60 * 24 * 90 * CACHE_TTL_ONE_MINUTE;
