module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:import/errors",
  ],
  plugins: ["prettier"],
  rules: { "prettier/prettier": "warn" },
};
