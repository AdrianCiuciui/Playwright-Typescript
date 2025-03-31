import { expect, Page } from "@playwright/test";
import BasePage from "./base.page";

export default class ProductPage extends BasePage{

    constructor(page: Page) {
        super(page);
    }

    get buttonAddToCart() {return this.page.getByText("Add to cart")};
    get buttonBackToProducts() {return this.page.locator('[data-test="back-to-products"]')};
    get buttonRemove() {return this.page.getByText("Remove")};
    get textProductTitle() {return this.page.locator('[data-test="inventory_item_name"]')};
    get textProductDescription() {return this.page.locator('[data-test="inventory_item_desc"]')};
    get textProductPrice() {return this.page.locator('[data-test="inventory-item-price"]')};
    
}