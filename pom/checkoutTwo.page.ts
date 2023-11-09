import { expect, Page } from "@playwright/test";

export default class CheckoutTwoPage {

    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    buttonFinish = () => this.page.locator("#finish");

}