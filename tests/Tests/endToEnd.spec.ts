import { test, expect } from '@playwright/test';
import LoginPage from '../POM/login.page';
import ProductsPage from '../POM/products.page';
import CartPage from '../POM/cart.page';


test(" Place product in cart and checkout | @e2e ", async ( { page }) => {

    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);

    

    await loginPage.goToLogin();
    await loginPage.performLoginWithRegularUser();
    await productsPage.addProductToCartAndGoToCart(2);
    await cartPage.clickCheckoutButton();
    
    
})