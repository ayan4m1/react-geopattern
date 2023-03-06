import { generate, Pattern, PatternOptions } from 'geopattern';

/**
 * Represents an object with CSS style properties.
 */
export interface StyleObject {
  'background-image'?: string;
}

const moduleCache = new Map<string, Pattern>();

/**
 * Create and cache or return cached GeoPattern object.
 *
 * @param string? The cache key / data to hash.
 * @param options? PatternOptions, see GeoPattern docs.
 * @param cache? Map to use as a cache
 * @returns Null if no hash was passed in, a Pattern object otherwise.
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

/**
 * Compute a CSS style object for a given pattern.
 *
 * @param pattern A Pattern object.
 * @returns A CSS style object.
 */
export const computePatternStyle = (pattern: Pattern): StyleObject => ({
  'background-image': pattern.toDataUrl()
});
