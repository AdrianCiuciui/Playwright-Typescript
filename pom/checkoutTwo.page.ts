import { expect, Page } from "@playwright/test";

export default class CheckoutTwoPage {

    constructor(private page: Page) {}

    get buttonFinish() {return this.page.locator("#finish")};

}