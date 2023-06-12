const reactRecommended = require("eslint-plugin-react/configs/recommended");
const reactHooks = require("eslint-plugin-react-hooks");
const jsxA11y = require("eslint-plugin-jsx-a11y");
const prettier = require("eslint-config-prettier");

module.exports = [
	{
		...reactRecommended,
		settings: {
			react: {
				version: "detect",
			},
		},
		languageOptions: {
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
		},

		rules: {
			...reactRecommended.rules,
			"react/react-in-jsx-scope": "off",
		},
	},
	{
		files: ["**/*.{js,jsx}"],
		rules: {
			"react/prop-types": "off",
		},
	},
	{
		plugins: {
			"jsx-a11y": jsxA11y,
		},
		rules: {
			...jsxA11y.configs.recommended.rules,
		},
	},
	{
		plugins: {
			"react-hooks": reactHooks,
		},
		rules: {
			...reactHooks.configs.recommended.rules,
		},
	},
	prettier,
];
