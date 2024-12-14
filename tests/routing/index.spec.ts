import { expect, test } from '@playwright/test';

test.describe(
  'Routing tests',
  {
    tag: '@routing',
  },
  () => {
    test('From home to experience page', async ({ page }) => {
      await page.goto('/');
      await page.getByRole('link', { name: 'Head of Cloud' }).click();
      await expect(page).toHaveURL('/experience/head-cloud-ai-architecture');
    });
  },
);
