import { expect, Page } from "@playwright/test";

export default class CartPage{
    
    page: Page;

    constructor (page: Page){
        this.page = page;
    }

    buttonCheckout = () => this.page.locator("#checkout");
    buttonContinueShopping = () => this.page.locator("#continue-shopping");
    labelQuantity = () => this.page.locator(".cart_quantity_label");

    public async checkPageElements(){
        expect (await this.buttonContinueShopping().isVisible()).toBeTruthy();
        expect (await this.buttonCheckout().isVisible()).toBeTruthy();
        expect (await this.labelQuantity().isVisible()).toBeTruthy();

    }   
}