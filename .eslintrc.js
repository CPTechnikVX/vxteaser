/* eslint-disable */
module.exports = {
	"env": {
		"browser": true,
		"es6": true,
		"jquery": true
	},
	"extends": "eslint:recommended",
	"parser": "babel-eslint",
	"parserOptions": {
		"ecmaFeatures": {
			"experimentalObjectRestSpread": true,
			"jsx": true
		},
		"sourceType": "module"
	},
	"plugins": [
		"react"
	],
	"rules": {
		"arrow-body-style": [
			"warn",
			"as-needed"
		],
		"arrow-spacing": [
			"warn",
			{
				"before": true,
				"after": true
			}
		],
		"class-methods-use-this": [
			"warn"
		],
		"comma-dangle": [
			"error",
			"always-multiline"
		],
		"comma-spacing": [
			"warn",
			{
				"before": false,
				"after": true
			}
		],
		"default-case": [
			"warn"
		],
		"prefer-const": [
			"warn"
		],
		"indent": [
			"warn",
			"tab",
			{"SwitchCase": 1}
		],
		"linebreak-style": [
			"error",
			"unix"
		],
		"no-case-declarations": 0,
		"no-mixed-spaces-and-tabs": [
			"error",
			"smart-tabs"
		],
		"no-var": [
			"error"
		],
		"semi": [
			"error",
			"always"
		],
		"space-in-parens": [
			"warn",
			"never"
		],
		"space-infix-ops": "error",
		"react/jsx-closing-bracket-location": "warn",
		"react/jsx-no-bind": [
			"error",
			{
				"ignoreRefs": true
			}

		],
		"react/jsx-uses-vars": "error",
		"react/jsx-uses-react": "error",
		"react/prop-types": "error",
		"react/sort-comp": "warn"
	}
};
