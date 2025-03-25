import { expect, Page } from "@playwright/test";

export default class CheckoutTwoPage {

    constructor(private page: Page) {}

    buttonFinish = () => this.page.locator("#finish");

}