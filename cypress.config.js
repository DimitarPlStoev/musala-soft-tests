// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     baseUrl: "https://www.musala.com/",
//     // specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
//     chromeWebSecurity: false,
//     failOnStatusCode: false,
//     specPattern: "cypress/e2e/**/*.{js,ts}",
//     excludeSpecPattern: ["**/1-getting-started", "**/2-advanced-examples"],
//     video: false,
//     viewportHeight: 1080,
//     viewportWidth: 1920,
//     setupNodeEvents(on, config) {},
//     compilerOptions: {
//       types: ["cypress"],
//     },
//   },
// });


const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.musala.com/",
    chromeWebSecurity: false,
    failOnStatusCode: false,
    specPattern: "cypress/e2e/**/*.{js,ts}",
    excludeSpecPattern: ["**/1-getting-started", "**/2-advanced-examples"],
    video: false,
    viewportHeight: 1080,
    viewportWidth: 1920,
    reporter: 'mochawesome', // Add the reporter here
    reporterOptions: {
      reportDir: 'cypress/reports', // Directory where the report will be saved
      overwrite: false,
      html: true,
      json: true,
      timestamp: 'mmddyyyy_HHMMss'
    },
    setupNodeEvents(on, config) {
      // Implement node event listeners here, if needed
    },
    compilerOptions: {
      types: ["cypress"],
    },
  },
});
