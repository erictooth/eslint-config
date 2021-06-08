module.exports = {
  parser: "@typescript-eslint/parser",
  extends: ["plugin:@typescript-eslint/recommended", "prettier"],
  rules: {
    "react/prop-types": "off",
    "@typescript-eslint/ban-ts-comment": "warn",
  },
};
