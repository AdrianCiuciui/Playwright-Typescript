import {Page} from "@playwright/test"

export default class BasePage {

    // This is the base page class that contains common elements and methods for all pages
    // It is set to protected so that it can be accessed by child classes
    constructor(protected readonly page: Page){}


    get buttonCart() {return this.page.locator('shopping_cart_container')};
    get notificationCart() {return this.page.locator(".shopping_cart_badge")}
    get buttonBurgerMenu() {return this.page.getByTestId("react-burger-menu-btn")};
    get buttonMenuAllItems() {return this.page.getByTestId("inventory_sidebar_link")};
    get buttonMenuAbout() {return this.page.getByTestId("about_sidebar_link")};
    get buttonMenuLogout() {return this.page.getByTestId("logout_sidebar_link")};
    get buttonMenuResetAppState() {return this.page.getByTestId("reset_sidebar_link")};
    get buttonMenuClose() {return this.page.getByTestId("react-burger-cross-btn")};
    get buttonMenuTwitter() {return this.page.getByTestId("twitter")};
    get buttonMenuFacebook() {return this.page.getByTestId("facebook")};
    get buttonMenuLinkedIn() {return this.page.getByTestId("linkedin")};





}