const { defineConfig } = require("cypress");
const getCompareSnapshotsPlugin = require('cypress-image-diff-js/dist/plugin');
module.exports = defineConfig({
  e2e: {
	  baseUrl: 'http://localhost:80',
    setupNodeEvents(on, config) {
      getCompareSnapshotsPlugin(on, config);
    },
  },
  "env": {
    "preserveOriginalScreenshot": true
  },
  scrollBehavior: false,
  animationDistanceThreshold: 1
});
