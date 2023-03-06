import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';

export default {
  input: './src/index.ts',
  output: [
    {
      file: './lib/index.js',
      format: 'esm'
    },
    {
      file: './lib/index.cjs',
      format: 'cjs'
    }
  ],
  external: ['geopattern'],
  plugins: [typescript(), terser()]
};
