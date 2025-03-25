import { expect, Page } from "@playwright/test";

export default class CheckoutOnePage {

    constructor(private page: Page) {}

    get inputFirstName() {return this.page.locator("#first-name")};
    get inputLastName() {return this.page.locator("#last-name")};
    get inputPostalCode() {return this.page.locator("#postal-code")};
    get buttonContinue() {return this.page.locator("#continue")};

    public async inputMandatoryValues(firstName: string, lastName: string, zipCode: string) {
        await this.inputFirstName.fill(firstName);
        await this.inputLastName.fill(lastName);
        await this.inputPostalCode.fill(zipCode);
    }
    
}