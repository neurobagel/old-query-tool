module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: [
    'plugin:nuxt/recommended',
    'plugin:vue/recommended',
    // https://www.npmjs.com/package/eslint-config-airbnb-base
    'airbnb-base',
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {},
};
