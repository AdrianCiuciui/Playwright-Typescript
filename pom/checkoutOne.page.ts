import { expect, Page } from "@playwright/test";
import BasePage from "./base.page";

export default class CheckoutOnePage extends BasePage{

    constructor(page: Page) {
        super(page);
    }

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