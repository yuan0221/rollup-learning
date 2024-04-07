import buble from '@rollup/plugin-buble';

export default {
  input: 'main.js',
	output: {
		file: 'bundle.js',
		format: 'es'
	},
  plugins: [
    buble()
  ]
}