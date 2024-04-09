const path = require('path');
const { getBabelOutputPlugin } = require('@rollup/plugin-babel');
const serve = require('rollup-plugin-serve')
const { terser } = require('rollup-plugin-terser')
const del = require('rollup-plugin-delete');
const livereload = require('rollup-plugin-livereload')
const resolve = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')
const json = require('@rollup/plugin-json')
const postcss = require('rollup-plugin-postcss')
const template = require('rollup-plugin-generate-html-template')
const url = require('@rollup/plugin-url')

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
    url({ // 将导入的图片转为 data uri（base64）
      limit: 122880,  // 120kb， 如果大于该值，则会将图片复制到目标文件夹，转为 hash 文件名 
      publicPath: './assets/images/',
      destDir: path.join(__dirname, 'dist/assets/images')
    }),
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
      plugins: [ // import '../x.css' 的方式将在 head 标签中注入 
        require('autoprefixer'),
        require('postcss-url')([ // css文件中的图片资源转为 base64
          {
            filter: '**/src/images/*.png',
            url: 'inline',
            maxSize: 120, // kb
          },
        ])
      ] 
    }),
    json(),
    resolve(), // 用于在node_modules 中定位 npm 模块
    commonjs(), // 将 commonjs 模块转为 es6
    getBabelOutputPlugin({ // 必须在 resolve 和 commonjs 之后配置
      "allowAllFormats": true,
      "presets": [
        [
          '@babel/preset-env',
          {
            "targets": {
              "ie": "7"
            },
          }
        ]
      ],
    }),
    template({ // 将模板copy到dist目录，并自动插入 script
      template: 'template/index.html',
      target: 'index.html',
    }),
  ]
}