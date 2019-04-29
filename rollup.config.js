import babel from 'rollup-plugin-babel';
import external from 'rollup-plugin-peer-deps-external';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import builtins from 'rollup-plugin-node-builtins';
import minify from 'rollup-plugin-babel-minify';

import pkg from './package.json';

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/main.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true
    }
  ],
  plugins: [
    builtins(),
    external(),
    babel({
      exclude: 'node_modules/**'
    }),
    resolve(),
    commonjs(),
    production && minify()
  ]
}
