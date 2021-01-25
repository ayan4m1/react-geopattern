import GeoPattern from 'geopattern';

const cache = new Map();

const useGeoPattern = (hash, options) => {
  var isCached = cache.has(hash);
  var pattern = isCached ? cache.get(hash) : GeoPattern.generate(hash, options);

  return {
    'background-image': pattern.toDataUrl()
  };
};

export default {
  useGeoPattern
};
