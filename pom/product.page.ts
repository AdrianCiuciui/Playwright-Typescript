import { expect, Page } from "@playwright/test";

export default class ProductPage {

    constructor(private page: Page) {}

    buttonaddToCart = () => this.page.getByText("Add to cart");
    buttonBackToProducts = () => this.page.locator('[data-test="back-to-products"]');
}