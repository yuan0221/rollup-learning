import { babel } from '@rollup/plugin-babel';

export default {
  input: 'main.js',
	output: {
		file: 'bundle.js',
		format: 'es'
	},
  plugins: [
    babel({
      presets: ['@babel/preset-env']
    }),
  ]
}