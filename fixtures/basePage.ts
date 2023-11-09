import { test as base } from '@playwright/test';
import {
    CartPage,
    CheckoutOnePage,
    CheckoutTwoPage,
    ConfirmationPage,
    LoginPage,
    ProductsPage
}
    from '../pom';

export const test = base.extend<{
    cartPage: CartPage,
    checkoutOnePage: CheckoutOnePage,
    checkoutTwoPage: CheckoutTwoPage,
    confirmationPage: ConfirmationPage,
    loginPage: LoginPage,
    productsPage: ProductsPage
}>({
    cartPage: async ({ page }, use) => {
        await use(new CartPage(page));
    },
    checkoutOnePage: async ({ page }, use) => {
        await use(new CheckoutOnePage(page));
    },
    checkoutTwoPage: async ({ page }, use) => {
        await use(new CheckoutTwoPage(page));
    },
    confirmationPage: async ({ page }, use) => {
        await use(new ConfirmationPage(page));
    },
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    productsPage: async ({ page }, use) => {
        await use(new ProductsPage(page));
    }
})

export { expect } from '@playwright/test';