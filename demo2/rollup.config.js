const path = require('path');
const { babel } = require('@rollup/plugin-babel');
const serve = require('rollup-plugin-serve')
const { terser } = require('rollup-plugin-terser')
const del = require('rollup-plugin-delete');
const livereload = require('rollup-plugin-livereload')

const resolveFile = function (filePath) {
  return path.join(__dirname, filePath)
}

const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  input: resolveFile('src/index.js'),
  output: {
    file: resolveFile('dist/index.js'),
    format: 'umd',
    sourcemap: isDev,
  },
  plugins: [
    del({ targets: 'dist/*' }),
    babel({
      presets: ['@babel/preset-env']
    }),
    isDev && serve({
      port: 3002,
      contentBase: [resolveFile('dist'), resolveFile('template')]
    }),
    isDev && livereload(),
    !isDev && terser(),
  ]
}