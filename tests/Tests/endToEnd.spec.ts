import { test, expect } from '@playwright/test';
import LoginPage from '../POM/login.page';
import ProductsPage from '../POM/products.page';
import CartPage from '../POM/cart.page';
import CheckoutOnePage from '../POM/checkoutOne.page';
import CheckoutTwoPage from '../POM/checkoutTwo.page';
import ConfirmationPage from '../POM/confirmation.page';


test(" Place product in cart and checkout | @e2e ", async ( { page }) => {

    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutOnePage = new CheckoutOnePage(page);
    const checkoutTwoPage = new CheckoutTwoPage(page);
    const confirmationPage = new ConfirmationPage(page);

    

    await loginPage.goToLogin();
    await loginPage.performLoginWithRegularUser();
    await productsPage.addProductToCartAndGoToCart(2);
    await cartPage.clickCheckoutButton();
    await checkoutOnePage.inputMandatoryValues("First", "Last", "123123");
    await checkoutOnePage.clickContinueButton();
    await checkoutTwoPage.clickFinishButton();
    await confirmationPage.clickBackHome();
})