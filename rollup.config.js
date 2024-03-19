import babel from 'rollup-plugin-babel';
import { uglify } from "rollup-plugin-uglify";
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript';

const extensions = [
	'.js', '.ts', '.jsx', '.tsx',
];

module.exports = {
	input: 'index.ts',
	output: {
		file: './dist/index.js',
		format: 'umd',
		sourcemap: false,
		name: 'ReactSmoothDnD',
		globals: {
			'smooth-dnd': 'SmoothDnD',
			'react': 'React',
			'prop-types': 'PropTypes'
		},
	},
	external: ['smooth-dnd'],
	plugins: [
		typescript({module: 'CommonJS'}),
		commonjs({
			extensions
		}),
		babel({
			extensions,
			include: ['./index.ts', 'src/**/*'],
			exclude: 'node_modules/**',
		}),
		uglify(),
	],
};