import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url'
import { getBabelOutputPlugin } from '@rollup/plugin-babel';
import serve from 'rollup-plugin-serve'
import { terser } from 'rollup-plugin-terser'
import del from 'rollup-plugin-delete';
import livereload from 'rollup-plugin-livereload'
import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import postcss from 'rollup-plugin-postcss'
import template from 'rollup-plugin-generate-html-template'
import url from '@rollup/plugin-url'
import autoprefixer from 'autoprefixer'
import postcssUrl from 'postcss-url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const resolveFile = function (filePath) {
  return resolve(__dirname, filePath)
}

const isDev = process.env.NODE_ENV === 'development'

export default [{
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
      destDir: resolveFile('dist/assets/images')
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
        autoprefixer,
        postcssUrl([ // css文件中的图片资源转为 base64
          {
            filter: '**/src/images/*.png',
            url: 'inline',
            maxSize: 120, // kb TODO: css文件中的图片怎么复制到dist目录？html文件中的图片不显示问题？
          },
        ])
      ]
    }),
    json(),
    nodeResolve(), // 用于在node_modules 中定位 npm 模块
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
},
{
  input: resolveFile('src/module/sum.js'),
  output: {
    file: resolveFile('dist/sum.cjs.js'),
    format: 'cjs',
    sourcemap: false,
  },
},
{
  input: resolveFile('src/module/sum.js'),
  output: {
    file: resolveFile('dist/sum.iife.js'),
    format: 'iife',
    sourcemap: false,
  },
},
{
  input: resolveFile('src/module/sum.js'),
  output: {
    file: resolveFile('dist/sum.esm.js'),
    format: 'esm',
    sourcemap: false,
  },
},
{
  input: resolveFile('src/module/sum.js'),
  output: {
    file: resolveFile('dist/sum.amd.js'),
    format: 'amd',
    sourcemap: false,
  },
},
{
  input: resolveFile('src/module/sum.js'),
  output: {
    file: resolveFile('dist/sum.umd.js'),
    format: 'umd',
    sourcemap: false,
    name: 'name'
  },
},
{
  input: resolveFile('src/module/sum.js'),
  output: {
    file: resolveFile('dist/sum.system.js'),
    format: 'system',
    sourcemap: false,
    name: 'name'
  },
},
]