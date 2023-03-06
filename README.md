# react-geopattern

Use [GeoPattern](https://github.com/btmills/geopattern) from [React](https://github.com/facebook/react).

## prerequisites

- Node.js 16+

## installation

> npm install --save react-geopattern

## examples

Simplest usage:

```jsx
import { useGeoPattern, computePatternStyle } from 'react-geopattern';

export default function TestComponent() {
  const pattern = useGeoPattern('input-string');

  return <div style={computePatternStyle(pattern)}>Test</div>;
}
```

With custom GeoPattern options:

```jsx
import { useGeoPattern, computePatternStyle } from 'react-geopattern';

export default function TestComponent() {
  const pattern = useGeoPattern('input-string', {
    // any options that GeoPattern accepts
    color: '#ff0000'
  });

  return <div style={computePatternStyle(pattern)}>Test</div>;
}
```

With self-managed pattern cache:

```jsx
import { useMemo } from 'react';
import { useGeoPattern, computePatternStyle } from 'react-geopattern';

export default function TestComponent() {
  // you can invalidate the cache as needed with useMemo()
  const cache = useMemo(() => new Map(), []);
  const pattern = useGeoPattern('input-string', undefined, cache);

  return <div style={computePatternStyle(pattern)}>Test</div>;
}
```
