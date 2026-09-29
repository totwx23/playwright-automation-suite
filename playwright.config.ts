import { defineConfig, devices } from '@playwright/test';
/* -----------------------------------------------------------
/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// 
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testIgnore: ['**/auth.setup.ts'],
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    baseURL: process.env.BASE_URL,
    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
{
      name: 'setup',
      testMatch: /.*\.setup\.ts/,
    },
    {
      name: 'e2e-public',
      testMatch: /.*login.*\.spec\.ts/,
      use: {
        ...devices['Desktop Chrome'],
        storageState: { cookies: [], origins: [] },
      },
    },
    {
      name: 'e2e-logged-in',
      testIgnore: [/.*login.*\.spec\.ts/, /.*setup\.ts/],
      use: {
        ...devices['Desktop Chrome'],
        storageState: 'playwright/.auth/user.json',
      },
      dependencies: ['setup'],
    },











/* -----------------------------------------------------------

    // 1. Proyecto independiente para hacer el login primero
    {
      name: 'setup',
      testMatch: /.*\.setup\.ts/,
    },

   // 1. Proyecto para tests públicos o de Login (SIN SESIÓN)
    {
      name: "e2e-public",
      // Aplica a archivos que contengan 'login' o estén en la carpeta public
      testMatch: /.*login.*\.spec\.ts/,
      use: {
        ...devices["Desktop Chrome"],
        // Forzar contexto limpio (sin cookies ni storage previo)
        storageState: { cookies: [], origins: [] },
      },
    },

    // 2. Proyecto para tests que requieren autenticación previa (CON SESIÓN)
    {
      name: "e2e-logged-in",
      // Aplica al resto de los tests que NO sean de login ni setup
      testIgnore: [/.*login.*\.spec\.ts/, /.*setup\.ts/],
      use: {
        ...devices["Desktop Chrome"],
        // Inyecta las cookies guardadas por tu auth.setup.ts
        storageState: "playwright/.auth/user.json",
      },
    },
    // 2. Navegadores que dependen del proyecto 'setup'
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
        storageState: 'playwright/.auth/user.json',
      },
      dependencies: ['setup'],
    },

    {
      name: 'firefox',
      use: { 
        ...devices['Desktop Firefox'],
        storageState: 'playwright/.auth/user.json',
      },
      dependencies: ['setup'],
    },

    {
      name: 'webkit',
      use: { 
        ...devices['Desktop Safari'],
        storageState: 'playwright/.auth/user.json',
      },
      dependencies: ['setup'],
    },
  ],

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },


  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
  ]
});
