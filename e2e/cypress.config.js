import { defineConfig } from "cypress";
import { configureSynpressForMetaMask } from '@synthetixio/synpress/cypress'
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";

// async function setupNodeEvents(
//   on: Cypress.PluginEvents,
//   config: Cypress.PluginConfigOptions,
// ): Promise<Cypress.PluginConfigOptions> {
//   configureSynpressForMetaMask(on, config)
//   // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
//   await addCucumberPreprocessorPlugin(on, config);

//   on(
//     "file:preprocessor",
//     createBundler({
//       plugins: [createEsbuildPlugin(config)],
//     }),
//   );

//   // Make sure to return the config object as it might have been modified by the plugin.
//   return config;
// }

export default defineConfig({
  chromeWebSecurity: true,
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    experimentalInteractiveRunEvents: true,
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportPageTitle: 'custom-title',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
    },
    baseUrl: 'http://localhost:3000',
    specPattern: 'cypress/e2e/*.feature',
    supportFile: 'cypress/support/e2e.{js,jsx,ts,tsx}',
    testIsolation: false,
    async setupNodeEvents(on, config) {
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        }),
      )
      await addCucumberPreprocessorPlugin(on, config);
      configureSynpressForMetaMask(on, config)

      return config

    },
  },
});