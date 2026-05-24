import { test, expect } from '@playwright/test';

test('App load and basics', async ({ page }) => {
  await page.goto('/MonolithUI/');
  await expect(page.locator('.doc-command-bar')).toBeVisible();
  await expect(page.locator('.doc-nav')).toBeVisible();

  // ensure the default brand has its correct CSS class injected
  await expect(page.locator('html')).toHaveClass(/brand-plasma-core/);
});
