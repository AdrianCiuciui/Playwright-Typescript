import { test, expect } from "../../fixtures/basePage";

test(" Place product in cart and checkout | @e2e ", async (
    {cartPage, checkoutOnePage, checkoutTwoPage, confirmationPage, loginPage, productsPage }) => {

    await loginPage.goToLogin();
    await loginPage.performLoginWithRegularUser();
    await productsPage.addProductToCartAndGoToCart(2);
    await cartPage.clickCheckoutButton();
    await checkoutOnePage.inputMandatoryValues("First", "Last", "123123");
    await checkoutOnePage.clickContinueButton();
    await checkoutTwoPage.clickFinishButton();
    await confirmationPage.clickBackHome();
})