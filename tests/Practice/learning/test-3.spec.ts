import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByLabel('Alege limba, ro').click();
  await page.getByLabel('English').click();
  await page.getByRole('button', { name: 'Accept all' }).click();
  await page.getByLabel('Search', { exact: true }).click();
  await page.getByLabel('Search', { exact: true }).fill('adadadadadad');
  await page.getByRole('button', { name: 'Google Search' }).click();
});