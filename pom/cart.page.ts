import { expect, Page } from "@playwright/test";
import BasePage from "./base.page";

export default class CartPage extends BasePage{

    constructor(page: Page) {
        super(page);
    }

    get buttonCheckout() {return this.page.locator("#checkout")};

}