import { expect, Page } from "@playwright/test";

export default class CartPage {

    constructor(private page: Page) {}

    buttonCheckout = () => this.page.locator("#checkout");

}