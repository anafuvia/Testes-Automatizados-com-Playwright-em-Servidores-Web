const { defineConfig } = require("@playwright/test");

module.exports = defineConfig({
  testDir: "./tests",
  reporter: "list",
  use: {
    baseURL: "http://localhost:3000",
    browserName: "chromium",
    headless: true,
    screenshot: "only-on-failure",
    trace: "on-first-retry"
  },
  webServer: {
    command: "npm start",
    url: "http://localhost:3000",
    reuseExistingServer: !process.env.CI
  }
});
