import { expect, Page } from "@playwright/test";
import BasePage from "./base.page";

export default class CheckoutTwoPage extends BasePage{

    constructor(page: Page) {
        super(page);
    }

    get buttonFinish() {return this.page.locator("#finish")};

}