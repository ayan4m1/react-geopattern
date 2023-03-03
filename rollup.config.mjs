import { babel } from '@rollup/plugin-babel';
import eslint from '@rollup/plugin-eslint';

export default {
  input: './src/index.js',
  output: {
    dir: './dist/',
    format: 'esm',
    exports: 'auto'
  },
  external: ['geopattern'],
  plugins: [
    eslint(),
    babel({
      babelHelpers: 'runtime',
      exclude: 'node_modules/**'
    })
  ]
};
