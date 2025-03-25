import { expect, Page } from "@playwright/test";

export default class CartPage {

    constructor(private page: Page) {}

    get buttonCheckout() {return this.page.locator("#checkout")};

}