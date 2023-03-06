import { Pattern, generate, PatternOptions } from 'geopattern';
import { useGeoPattern, computePatternStyle, StyleObject } from './index';

jest.mock('geopattern', () => ({
  generate: jest.fn()
}));

afterEach(() => {
  jest.clearAllMocks();
});

const createPatternMock = (dataUrl?: string): Pattern => ({
  color: '',
  toBase64: jest.fn(),
  toDataUri: jest.fn(),
  toDataUrl: jest.fn().mockReturnValue(dataUrl),
  toSvg: jest.fn()
});

describe('useGeoPattern', () => {
  const inputString = 'test';
  const cache = new Map<string, Pattern>();

  afterEach(() => {
    cache.clear();
  });

  it('calls GeoPattern generate()', () => {
    const options: PatternOptions = {};

    useGeoPattern(inputString, options, cache);
    expect(generate).toHaveBeenCalledWith(inputString, options);
  });

  it('caches interally by default', () => {
    const firstPattern = useGeoPattern(inputString);
    const secondPattern = useGeoPattern(inputString);

    expect(firstPattern).toBe(secondPattern);
    expect(generate).toHaveBeenCalledTimes(1);
  });

  it('caches externally if desired', () => {
    const key = 'key';
    const value = createPatternMock();

    cache.set(key, value);
    useGeoPattern(key, undefined, cache);
    expect(generate).not.toHaveBeenCalled();
  });
});

describe('computePatternStyle', () => {
  const imageData = 'test123';

  it('generates pattern data URL', () => {
    const pattern = createPatternMock(imageData);
    const expected: StyleObject = {
      'background-image': imageData
    };

    expect(computePatternStyle(pattern)).toEqual(expected);
    expect(pattern.toDataUrl).toHaveBeenCalledTimes(1);
  });
});
