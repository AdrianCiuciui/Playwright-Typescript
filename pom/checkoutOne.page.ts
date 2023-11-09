import { expect, Page } from "@playwright/test";

export default class CheckoutOnePage {

    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    inputFirstName = () => this.page.locator("#first-name");
    inputLastName = () => this.page.locator("#last-name");
    inputPostalCode = () => this.page.locator("#postal-code");
    buttonContinue = () => this.page.locator("#continue");

    public async inputMandatoryValues(fn: string, ln: string, zip: string) {
        await this.inputFirstName().fill(fn);
        await this.inputLastName().fill(ln);
        await this.inputPostalCode().fill(zip);
    }
}