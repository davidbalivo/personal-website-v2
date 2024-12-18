import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  snapshotPathTemplate: '{testDir}/{testFileDir}/screenshots/{arg}{ext}',
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    baseURL: 'http://localhost:4321',
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'Mobile Android Medium',
      grep: [/@ui/],
      use: {
        ...devices['Pixel 5'],
        viewport: { width: 390, height: 844 },
        userAgent:
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
      },
    },
    {
      name: 'Mobile Android Large',
      grep: [/@ui/],
      use: {
        ...devices['Pixel 7'],
        viewport: { width: 430, height: 932 },
        userAgent:
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
      },
    },
    {
      name: 'Mobile iPhone Medium',
      grep: [/@ui/],
      use: {
        ...devices['iPhone 12 Pro'],
        viewport: { width: 390, height: 844 },
        userAgent:
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Safari/605.1.15',
      },
    },
    {
      name: 'Mobile iPhone Large',
      grep: [/@ui/],
      use: {
        ...devices['iPhone 14 Pro Max'],
        viewport: { width: 430, height: 932 },
        userAgent:
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Safari/605.1.15',
      },
    },
    {
      name: 'Desktop SM',
      grep: [/@ui/],
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 500, height: 1080 },
        userAgent:
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
      },
    },
    {
      name: 'Desktop MS',
      grep: [/@ui/],
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 750, height: 1080 },
        userAgent:
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
      },
    },
    {
      name: 'Desktop MD',
      grep: [/@ui/],
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 768, height: 1080 },
        userAgent:
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
      },
    },
    {
      name: 'Desktop LM',
      grep: [/@ui/],
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 995, height: 1080 },
        userAgent:
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
      },
    },
    {
      name: 'Desktop LG',
      grep: [/@ui/],
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1024, height: 1080 },
        userAgent:
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
      },
    },
    {
      name: 'Desktop XL',
      grep: [/@ui/, /@routing/],
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1280, height: 1080 },
        userAgent:
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
      },
    },
  ],

  webServer: [
    {
      command: 'npm run dev',
      url: 'http://localhost:4321',
      timeout: 120 * 1000,
      reuseExistingServer: false,
    },
  ],
});
