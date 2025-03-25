import { expect, Page } from "@playwright/test";

export default class ProductPage {

    constructor(private page: Page) {}

    get buttonaddToCart() {return this.page.getByText("Add to cart")};
    get buttonBackToProducts() {return this.page.locator('[data-test="back-to-products"]')};
    
}