import { test, expect } from "../../fixtures/basePage";


test(" Place product in cart and checkout | @e2e ", async (
    {cartPage, checkoutOnePage, checkoutTwoPage, confirmationPage, loginPage, productsPage }) => {

    await loginPage.goToLogin();
    await loginPage.performLoginWithRegularUser();
    await productsPage.checkNumberOfProductsNotInTheCart(6);
    await productsPage.addToCartNth().nth(4).click();
    await productsPage.checkNumberOfProductsNotInTheCart(5);
    await productsPage.addToCartNth().nth(0).click();
    await productsPage.checkNumberOfProductsNotInTheCart(4);
    await productsPage.buttonCart().click();
    await cartPage.buttonCheckout().click();
    await checkoutOnePage.inputMandatoryValues("First", "Last", "123123");
    await checkoutOnePage.buttonContinue().click();
    await checkoutTwoPage.buttonFinish().click();
    await confirmationPage.buttonBackHome().click();
    await productsPage.checkNumberOfProductsNotInTheCart(6);

})

test(" Place product in cart from product page | @e2e ", async (
    {cartPage, checkoutOnePage, checkoutTwoPage, confirmationPage, loginPage, productPage, productsPage}) => {

    await loginPage.goToLogin();
    await loginPage.performLoginWithRegularUser();
    await productsPage.buttonProductNth().nth(1).click();
    await productPage.buttonaddToCart().click();
    await productPage.buttonBackToProducts().click();

    }
)