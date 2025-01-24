import { Pattern, generate, PatternOptions } from 'geopattern';
import { useGeoPattern } from './index';

jest.mock('geopattern', () => ({
  generate: jest.fn()
}));

afterEach(() => {
  jest.clearAllMocks();
});

describe('useGeoPattern', () => {
  const cache = new Map<string, Pattern>();

  afterEach(() => {
    cache.clear();
  });

  it('calls GeoPattern generate(...args)', () => {
    const testKey = 'test';
    const options: PatternOptions = {};

    useGeoPattern(testKey, options);
    expect(generate).toHaveBeenCalledWith(testKey, options);
  });

  it('caches interally by default', () => {
    const testKey = 'internalTest';

    const firstPattern = useGeoPattern(testKey);
    const secondPattern = useGeoPattern(testKey);

    expect(firstPattern).toBe(secondPattern);
    expect(generate).toHaveBeenCalledTimes(1);
  });

  it('caches externally if Map is provided', () => {
    const key = 'key';
    const value: Pattern = {
      color: '',
      toBase64: jest.fn(),
      toDataUri: jest.fn(),
      toDataUrl: jest.fn(),
      toSvg: jest.fn()
    };

    cache.set(key, value);
    useGeoPattern(key, undefined, cache);
    expect(generate).not.toHaveBeenCalled();
  });
});
