import { expect, test } from '@playwright/test';
import { isCi } from '../../config';

test.describe(
  'Screenshots Visual Regression',
  {
    tag: ['@ui'],
  },
  () => {
    test.beforeAll(() => {
      test.skip(isCi, 'Skipping Screenshots Visual Regression in CI environment');
    });

    test('Home Page', async ({ page }) => {
      await page.goto('/');
      await page.evaluate(() => {
        document.querySelectorAll('img[loading="lazy"]').forEach((img) => {
          img.removeAttribute('loading');
        });
      });
      await expect(page).toHaveScreenshot(`page-home-${test.info().project.name}.png`, { fullPage: true });
    });

    test('Experience Page', async ({ page }) => {
      await page.goto('/experience/head-cloud-ai-architecture');
      await expect(page).toHaveScreenshot(`page-experience-${test.info().project.name}.png`, { fullPage: true });
    });
  },
);
