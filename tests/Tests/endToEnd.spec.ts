import { test, expect } from '@playwright/test';
import LoginPage from '../POM/login.page';
import CartPage from '../POM/cart.page';


test(" Place product in cart and checkout | e2e ", async ( { page }) => {

    const loginPage = new LoginPage(page);
    const cartPage = new CartPage(page);
    

    loginPage.goToLogin();
    loginPage.performLoginWithRegularUser();







})