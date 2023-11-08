import { expect, Page } from "@playwright/test";

export default class CartPage{
    
    page: Page;

    constructor (page: Page){
        this.page = page;
    }


}