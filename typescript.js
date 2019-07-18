module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module"
    },
    extends: ["plugin:@typescript-eslint/recommended", "prettier/@typescript-eslint"],
    rules: {
        "@typescript-eslint/prefer-interface": "off"
    }
};
