import { expect, test } from '@playwright/test';

test.describe(
  'Screenshots Visual Regression',
  {
    tag: ['@ui'],
  },
  () => {
    test('Home Page', async ({ page }) => {
      await page.goto('/');
      await page.evaluate(() => {
        document.querySelectorAll('img[loading="lazy"]').forEach((img) => {
          img.removeAttribute('loading');
        });
      });
      console.log('info', test.info().project.name);
      await expect(page).toHaveScreenshot(`page-home-${test.info().project.name}.png`, {
        fullPage: true,
        threshold: 0.01,
        maxDiffPixelRatio: 0.01,
      });
    });

    test('Experience Page', async ({ page }) => {
      await page.goto('/experience/head-cloud-ai-architecture');
      await expect(page).toHaveScreenshot(`page-experience-${test.info().project.name}.png`, {
        fullPage: true,
        threshold: 0.01,
        maxDiffPixelRatio: 0.01,
      });
    });
  },
);
