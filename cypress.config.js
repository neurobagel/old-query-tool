const { defineConfig } = require("cypress");

module.exports = defineConfig({
  component: {
    viewportWidth: 2000,
    viewportHeight: 1000,
    devServer: {
      framework: "nuxt",
      bundler: "webpack",
    },
  },

  e2e: {
    viewportWidth: 2000,
    viewportHeight: 1000,
    baseUrl: "http://localhost:3000",
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
