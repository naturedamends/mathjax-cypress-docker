const { defineConfig } = require("cypress");
const getCompareSnapshotsPlugin = require('cypress-image-diff-js/dist/plugin');
module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://site.test.dev',
    setupNodeEvents(on, config) {
      getCompareSnapshotsPlugin(on, config);
    },
  },
  "env": {
    "preserveOriginalScreenshot": true
  },
  scrollBehavior: false,
  waitForAnimations: 1
});