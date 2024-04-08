const path = require('path');
const { babel } = require('@rollup/plugin-babel');
const serve = require('rollup-plugin-serve')
const { terser } = require('rollup-plugin-terser')
const del = require('rollup-plugin-delete');
const livereload = require('rollup-plugin-livereload')
const resolve = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')
const json = require('@rollup/plugin-json')
const postcss = require('rollup-plugin-postcss')

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
    isDev && serve({
      port: 3002,
      contentBase: [resolveFile('dist'), resolveFile('template')]
    }),
    isDev && livereload(),
    !isDev && terser(),
    postcss({
      // extract: path.resolve('dist/css/my-custom-file-name.css'), // 额外提取css
      // minimize: !isDev, // 压缩css
      plugins: [] // import '../x.css' 的方式将在 head 标签中注入 
    }),
    json(),
    resolve(), // 用于在node_modules 中定位 npm 模块
    commonjs(), // 将 commonjs 模块转为 es6
    babel({ // 必须在 resolve 和 commonjs 之后配置
      presets: ['@babel/preset-env']
    }),
  ]
}