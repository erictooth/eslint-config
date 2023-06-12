const js = require("@eslint/js");
const perfectionistNatural = require("eslint-plugin-perfectionist/configs/recommended-natural");
const prettier = require("eslint-config-prettier");

module.exports = [
	js.configs.recommended,
	{
		...perfectionistNatural,
		rules: {
			...perfectionistNatural.rules,
			"perfectionist/sort-imports": "warn",
		},
	},
	prettier,
];
