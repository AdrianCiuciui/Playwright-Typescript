import { expect, Page } from "@playwright/test";

export default class LoginPage{
    
    page: Page;

    constructor (page: Page){
        this.page = page;
    }

    inputLogin = () => this.page.locator('[data-test="username"]');;
    inputPassword = () => this.page.locator("#password");
    buttonLogin = () => this.page.locator("#login-button");


    public async goToLogin(){
        await this.page.goto("https://www.saucedemo.com");
    }

    public async performLoginWithRegularUser(){

        await this.inputLogin().fill("standard_user");
        await this.inputPassword().fill("secret_sauce");
        await this.buttonLogin().click();
    }
}