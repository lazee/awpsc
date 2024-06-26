import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import copy from 'rollup-plugin-copy';

export default {
  input: 'src/main.ts',
  output: {
    dir: 'dist',
    format: 'esm',
  },
  plugins: [
    resolve({
      preferBuiltins: false, // Disable preferring built-in modules
    }),
    commonjs(),
    typescript({declaration: true}),
    copy({
      targets: [
        { src: 'node_modules/@azure/web-pubsub-client/**/*.d.ts', dest: 'dist/types' }
      ]
    })
  ],
};