import {Page} from "@playwright/test"

export default class BasePage {

    constructor(protected readonly page: Page){}



    get buttonCart() {return this.page.locator('shopping_cart_container')};
    get notificationCart() {return this.page.locator(".shopping_cart_badge")}
    get buttonBurgerMenu() {return this.page.getByTestId("react-burger-menu-btn")};




}