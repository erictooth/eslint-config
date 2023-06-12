const typescriptEslint = require("@typescript-eslint/eslint-plugin");
const typescriptParser = require("@typescript-eslint/parser");
const prettier = require("eslint-config-prettier");

module.exports = [
	{
		files: ["**/*.{ts,tsx}"],
		languageOptions: {
			parser: typescriptParser,
		},
		plugins: {
			"@typescript-eslint": typescriptEslint,
		},
		rules: {
			...typescriptEslint.configs.recommended.rules,
		},
	},
	prettier,
];

// module.exports = {
//   parser: "@typescript-eslint/parser",
//   extends: ["plugin:@typescript-eslint/recommended", "prettier"],
//   rules: {
//     "react/prop-types": "off",
//     "@typescript-eslint/ban-ts-comment": "warn",
//   },
// };
