import { expect, Page } from "@playwright/test";

export default class CartPage {

    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    buttonCheckout = () => this.page.locator("#checkout");


    public async clickCheckoutButton() {
        await this.buttonCheckout().click();
    }


}