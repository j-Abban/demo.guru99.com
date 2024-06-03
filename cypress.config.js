const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'xyygtp',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalMemoryManagement: true,
    numTestsKeptInMemory: 1,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000
  },
});
