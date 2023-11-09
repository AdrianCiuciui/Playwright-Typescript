import { expect, Page } from "@playwright/test";

export default class ProductsPage {

    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    buttonCart = () => this.page.locator(".shopping_cart_link");
    addToCartNth = () => this.page.getByText("Add to cart");

    public async goToProducts() {

        await this.page.goto("https://www.saucedemo.com/inventory.html");
    }

    public async addProductToCartAndGoToCart(index: number) {

        await this.addToCartNth().nth(index).click();
        await this.buttonCart().click();
    }
}