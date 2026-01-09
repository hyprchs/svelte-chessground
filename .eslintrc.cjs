module.exports = {
	root: true,
	extends: ['eslint:recommended', 'plugin:svelte/recommended', 'plugin:jsdoc/recommended'],
	plugins: ['svelte', 'jsdoc'],
	overrides: [
		{
			files: ['**/*.svelte'],
			parser: 'svelte-eslint-parser',
			rules: {
				'no-mixed-spaces-and-tabs': 'off'
			}
		}
	],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020
	},
	settings: {
		jsdoc: {
			mode: "typescript"
		}
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	}
};
