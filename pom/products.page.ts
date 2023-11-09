import { expect, Page } from "@playwright/test";

export default class ProductsPage {

    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    buttonCart = () => this.page.locator(".shopping_cart_link");
    addToCartNth = () => this.page.getByText("Add to cart");
    buttonProductNth = () => this.page.locator(".inventory_item_img.inventory_item_img");


    
    public async goToProducts() {
        await this.page.goto("https://www.saucedemo.com/inventory.html");
    }

    public async addProductToCartAndGoToCart(index: number) {
        await this.addToCartNth().nth(index).click();
    }

    public async clickGoToCart() {
        await this.buttonCart().click();
    }

    public async checkNumberOfProductsNotInTheCart(productsNotInCart: number) {
        const occurrences: number = await this.addToCartNth().count();
        await expect(occurrences).toBe(productsNotInCart);
    }


    public async clickOnProductImage(index: number) {
        await this.buttonProductNth().nth(index).click();
    }
}