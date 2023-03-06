# react-geopattern

Use [Geopattern](https://github.com/btmills/geopattern) from [React](https://github.com/facebook/react).

# prerequisites

- Node.js 16+

# example

```jsx
import { useGeoPattern, computePatternStyle } from 'react-geopattern';

export default function TestComponent() {
  const pattern = useGeoPattern('input-string');

  return <div style={computePatternStyle(pattern)}>Test</div>;
}
```
