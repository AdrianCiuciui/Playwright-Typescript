import { expect, Page } from "@playwright/test";

export default class ProductsPage {

    constructor(private page: Page) {}

    buttonCart = () => this.page.locator(".shopping_cart_link");
    addToCartNth = () => this.page.getByText("Add to cart");
    buttonProductNth = () => this.page.locator(".inventory_item_img.inventory_item_img");


    public async checkNumberOfProductsNotInTheCart(productsNotInCart: number) {
        const occurrences: number = await this.addToCartNth().count();
        await expect(occurrences).toBe(productsNotInCart);
    }

    public async checkNumberOfProductsAfterAddingProductToCart(productIndex: number, productsLeft: number) {
        await this.addToCartNth().nth(productIndex).click();
        await this.checkNumberOfProductsNotInTheCart(productsLeft);
    }
}