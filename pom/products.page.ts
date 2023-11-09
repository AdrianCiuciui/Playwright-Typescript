import { expect, Page } from "@playwright/test";

export default class ProductsPage {

    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    buttonCart = () => this.page.locator(".shopping_cart_link");
    addToCartNth = () => this.page.getByText("Add to cart");
    buttonProductNth = () => this.page.locator(".inventory_item_img.inventory_item_img");


    public async checkNumberOfProductsNotInTheCart(productsNotInCart: number) {
        const occurrences: number = await this.addToCartNth().count();
        await expect(occurrences).toBe(productsNotInCart);
    }

}