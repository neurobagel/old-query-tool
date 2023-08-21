const { defineConfig } = require("cypress");

module.exports = defineConfig({
  component: {
    viewportWidth: 1280,
    viewportHeight: 1024,
    devServer: {
      framework: "nuxt",
      bundler: "webpack",
    },
  },

  e2e: {
    viewportWidth: 1280,
    viewportHeight: 1024,
    baseUrl: "http://localhost:3000",
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
