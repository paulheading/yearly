import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    supportFile: "cypress/support/index.js",
    baseUrl: "http://localhost:4321",
  },
  env: {
    spotifyUsername: "paulheading@me.com",
    spotifyPassword: "cMxst22dziFi=$",
  },
});
