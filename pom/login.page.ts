import { expect, Page } from "@playwright/test";
import BasePage from "./base.page";

export default class LoginPage extends BasePage {
    
    private static readonly BASE_URL = "https://www.saucedemo.com";
    private static readonly PASSWORD = "secret_sauce";

    constructor (page: Page){
        super(page);
    }

    get inputLogin() {return this.page.locator('[data-test="username"]')};
    get inputPassword() {return this.page.locator('#password')};
    get buttonLogin() {return this.page.locator("#login-button")};


    public async goToLogin(){
        await this.page.goto(LoginPage.BASE_URL);
    }

    private async inputThePassword(){
        await this.inputPassword.fill(LoginPage.PASSWORD);
    }

    private async performLogin(username: string){
        await this.inputLogin.fill(username);
        await this.inputThePassword();
        await this.buttonLogin.click();
        await expect(this.page).toHaveURL(`${LoginPage.BASE_URL}/inventory.html`);
    }

    public async performLoginWithStandardUser(){
        await this.performLogin("standard_user");
    }

    public async performLoginWithLockedOutUser(){
        await this.performLogin("locked_out_user");
    }        

    public async performLoginWithProblemUser(){
        await this.performLogin("problem_user");
    }

    public async performLoginWithPerformanceGlitchUser(){
        await this.performLogin("performance_glitch_user");
    }

    public async performLoginWithErrorUser(){
        await this.performLogin("error_user");
    }

    public async performLoginWithVisualUser(){
        await this.performLogin("visual_user");
    }
}