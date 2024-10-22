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
    'plugin:cypress/recommended',
    // https://www.npmjs.com/package/eslint-config-airbnb-base
    'airbnb-base',
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {},
  overrides: [
    {
      files: './cypress/support/component.js',
      rules: {
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
      },
    },
    {
      files: ['index.vue', 'default.vue', 'Navbar.vue'],
      rules: {
        'vue/multi-word-component-names': 'off',
      },
    },
  ],
  ignorePatterns: ['cypress.config.js', 'dist/**', 'node_modules/**', '.nuxt/**'],
};
