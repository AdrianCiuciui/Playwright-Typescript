import { expect, Page } from "@playwright/test";

export default class CheckoutOnePage {

    constructor(private page: Page) {}

    inputFirstName = () => this.page.locator("#first-name");
    inputLastName = () => this.page.locator("#last-name");
    inputPostalCode = () => this.page.locator("#postal-code");
    buttonContinue = () => this.page.locator("#continue");

    public async inputMandatoryValues(firstName: string, lastName: string, zipCode: string) {
        await this.inputFirstName().fill(firstName);
        await this.inputLastName().fill(lastName);
        await this.inputPostalCode().fill(zipCode);
    }
    
}