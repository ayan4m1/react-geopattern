import { generate, Pattern, PatternOptions } from 'geopattern';

const moduleCache = new Map<string, Pattern>();

/**
 * Create and cache or return a cached GeoPattern object.
 *
 * @param string The cache key / data to hash.
 * @param options? PatternOptions, see GeoPattern docs.
 * @param cache? Map to use as a cache. If none is passed, a module-level cache is used.
 * @returns A Pattern object.
 */
export const useGeoPattern = (
  string: string,
  options?: PatternOptions,
  cache: Map<string, Pattern> = moduleCache
): Pattern => {
  const isCached = cache.has(string);
  const pattern = isCached ? cache.get(string) : generate(string, options);

  if (!isCached) {
    cache.set(string, pattern);
  }

  return pattern;
};
