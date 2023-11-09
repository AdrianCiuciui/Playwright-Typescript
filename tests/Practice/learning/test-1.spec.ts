// import { test, expect } from '@playwright/test';

// test('e2e place a product', async ({ page }) => {
//   await page.goto('https://www.saucedemo.com/');
//   await page.locator('[data-test="username"]').click();
//   await page.locator('[data-test="username"]').fill('standard_user');
//   await page.locator('[data-test="password"]').click();
//   await page.locator('[data-test="password"]').fill('secret_sauce');
//   await page.locator('[data-test="login-button"]').click();
//   await page.goto('https://www.saucedemo.com/inventory.html');
//   await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
//   await page.locator('a').filter({ hasText: '1' }).click();
//   await page.locator('[data-test="checkout"]').click();
//   await page.locator('[data-test="firstName"]').click();
//   await page.locator('[data-test="firstName"]').fill('aa');
//   await page.locator('[data-test="lastName"]').click();
//   await page.locator('[data-test="lastName"]').fill('aa');
//   await page.locator('[data-test="postalCode"]').click();
//   await page.locator('[data-test="postalCode"]').fill('aa');
//   await page.locator('[data-test="continue"]').click();
//   await page.locator('[data-test="finish"]').click();
//   await page.locator('[data-test="back-to-products"]').click();
// });