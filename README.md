# react-geopattern

Use [GeoPattern](https://github.com/btmills/geopattern) from [React](https://github.com/facebook/react).

## features

- Written in TypeScript
- Adds ~250 bytes at runtime
- Supports CommonJS or ESM
- Extensive unit testing
- Zero-configuration caching of generated patterns

## prerequisites

- Node.js 16+
- React 18

## installation

> npm install --save react-geopattern

## usage

This package provides one primary hook, `useGeoPattern`. The first two arguments are the same as those of `GeoPattern.generate`, namely an input string and an options object. The third argument is optional and allows you to override the caching behavior by providing your own instance of `Map<string, Pattern>`.

A utility function, `computePatternStyle`, is also provided to convert a `Pattern` object into a CSS style object, suitable for use as a `style` prop.

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
