const { defineConfig } = require("cypress");

module.exports = defineConfig({
  component: {
    devServer: {
      framework: "nuxt",
      bundler: "webpack",
    },
  },

  e2e: {
    baseUrl: "http://localhost:3000",
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
