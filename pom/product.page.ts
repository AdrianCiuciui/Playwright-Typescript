import { expect, Page } from "@playwright/test";

export default class ProductPage {

    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    buttonaddToCart = () => this.page.getByText("Add to cart");
    buttonBackToProducts = () => this.page.locator('[data-test="back-to-products"]');
}