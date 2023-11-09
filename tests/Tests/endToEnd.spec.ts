import { test, expect } from "../../fixtures/basePage";


test(" Place product in cart and checkout | @e2e ", async (
    {cartPage, checkoutOnePage, checkoutTwoPage, confirmationPage, loginPage, productsPage }) => {

    await loginPage.goToLogin();
    await loginPage.performLoginWithRegularUser();
    await productsPage.checkNumberOfProductsNotInTheCart(6);
    await productsPage.addProductToCartForIndexValue(4);
    await productsPage.checkNumberOfProductsNotInTheCart(5);
    await productsPage.addProductToCartForIndexValue(0);
    await productsPage.checkNumberOfProductsNotInTheCart(4);
    await productsPage.clickGoToCart();
    await cartPage.clickCheckoutButton();
    await checkoutOnePage.inputMandatoryValues("First", "Last", "123123");
    await checkoutOnePage.clickContinueButton();
    await checkoutTwoPage.clickFinishButton();
    await confirmationPage.clickBackHome();
    await productsPage.checkNumberOfProductsNotInTheCart(6);
})