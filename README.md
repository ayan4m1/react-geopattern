# react-geopattern

[![Package Version](https://badge.fury.io/js/react-geopattern.svg)](https://www.npmjs.com/package/react-geopattern)
[![codecov](https://codecov.io/gh/ayan4m1/react-geopattern/branch/main/graph/badge.svg?token=ZGX9D11EZO)](https://codecov.io/gh/ayan4m1/react-geopattern)

Use [GeoPattern](https://github.com/btmills/geopattern) from [React](https://github.com/facebook/react).

## features

- Written in TypeScript
- Adds less than 200 bytes at runtime
- Supports CommonJS or ESM
- Extensive unit testing
- Zero-configuration caching of generated patterns

## prerequisites

- Node.js 20+
- React 18+

## installation

> npm install --save geopattern@1 react-geopattern

## usage

This package provides one primary hook, `useGeoPattern`. The first two arguments are the same as those of `GeoPattern.generate`, namely an input string and an options object. The third argument is optional and allows you to override the caching behavior by providing your own instance of `Map<string, Pattern>`.

The most direct way of rendering the returned `Pattern` object is to call .toDataUrl() on it. Use the result in your CSS via the `style` prop or another prop that your style framework exposes (e.g. `sx` in Material-UI).

## examples

Simplest usage:

```jsx
import { useGeoPattern } from 'react-geopattern';

export default function TestComponent() {
  const pattern = useGeoPattern('input-string');

  return <div style={{ 'background-image': pattern.toDataUrl() }}>Test</div>;
}
```

With custom GeoPattern options:

```jsx
import { useGeoPattern } from 'react-geopattern';

export default function TestComponent() {
  const pattern = useGeoPattern('input-string', {
    // any options that GeoPattern accepts
    color: '#ff0000'
  });

  return <div style={{ 'background-image': pattern.toDataUrl() }}>Test</div>;
}
```

With self-managed pattern cache:

```jsx
import { useMemo } from 'react';
import { useGeoPattern } from 'react-geopattern';

export default function TestComponent() {
  // you can invalidate the cache as needed with useMemo()
  const cache = useMemo(() => new Map(), []);
  const pattern = useGeoPattern('input-string', undefined, cache);

  return <div style={{ 'background-image': pattern.toDataUrl() }}>Test</div>;
}
```
