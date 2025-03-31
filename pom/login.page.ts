import { expect, Page } from "@playwright/test";
import BasePage from "./base.page";

export default class LoginPage extends BasePage {
    
    // Constants
    private static readonly BASE_URL = "https://www.saucedemo.com";
    private static readonly PASSWORD = "secret_sauce";

    constructor (page: Page){
        super(page);
    }

    // Locators
    get inputLogin() {return this.page.locator('[data-test="username"]')};
    get inputPassword() {return this.page.locator('#password')};
    get buttonLogin() {return this.page.locator("#login-button")};
    get errorIconLogin() {return this.page.locator('[data-icon="times-circle"]').nth(0)};
    get errorIconPasword() {return this.page.locator('[data-icon="times-circle"]').nth(1)};
    get errorMessageText() {return this.page.locator('[data-test="error"]')};
    get errorMessageCloseButton() {return this.page.locator('[data-test="error"] > button')};


    // Methods

    public async goToSauceDemoLoginPage(){
        await this.page.goto(LoginPage.BASE_URL);
    }

    private async performLoginWithValidCredentials(username: string){
        await this.inputLogin.fill(username);
        await this.inputThePassword();
        await this.buttonLogin.click();
        await expect(this.page).toHaveURL(`${LoginPage.BASE_URL}/inventory.html`);
    }

    private async performLoginWithInvalidCredentials(username: string){
        await this.inputLogin.fill(username);
        await this.inputThePassword();
        await this.buttonLogin.click();
        await expect(this.page).toHaveURL(LoginPage.BASE_URL);
    }
    
    private async inputThePassword(){
        await this.inputPassword.fill(LoginPage.PASSWORD);
    }

    public async checkErrorSpecificElementsAreDisplayed(){
        await expect(this.errorMessageText).toBeVisible();
        await expect(this.errorMessageCloseButton).toBeVisible();
        await expect(this.errorIconLogin).toBeVisible();
        await expect(this.errorIconPasword).toBeVisible();   
    }

    public async checkErrorSpecificElementsAreNOTDisplayed(){
        await expect(this.errorMessageText).toHaveCount(0);
        await expect(this.errorMessageCloseButton).toHaveCount(0);
        await expect(this.errorIconLogin).toHaveCount(0);
        await expect(this.errorIconPasword).toHaveCount(0);
    }


    // Login with different users
    public async performLoginWithStandardUser(){
        await this.performLoginWithValidCredentials("standard_user");
    }

    public async performLoginWithLockedOutUser(){
        await this.performLoginWithValidCredentials("locked_out_user");
    }        

    public async performLoginWithProblemUser(){
        await this.performLoginWithValidCredentials("problem_user");
    }

    public async performLoginWithPerformanceGlitchUser(){
        await this.performLoginWithValidCredentials("performance_glitch_user");
    }

    public async performLoginWithErrorUser(){
        await this.performLoginWithValidCredentials("error_user");
    }

    public async performLoginWithVisualUser(){
        await this.performLoginWithValidCredentials("visual_user");
    }

    public async performLoginWithErrorTriggeringUser(){
        await this.performLoginWithInvalidCredentials("invalid_user");
    }
    
}