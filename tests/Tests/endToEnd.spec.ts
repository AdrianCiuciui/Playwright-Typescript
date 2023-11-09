import { test, expect } from "../../fixtures/basePage";
import ProductPage from "../../pom/product.page";

test(" Place product in cart and checkout | @e2e ", async (
    {cartPage, checkoutOnePage, checkoutTwoPage, confirmationPage, loginPage, productsPage }) => {

    await loginPage.goToLogin();
    await loginPage.performLoginWithRegularUser();
    await productsPage.addProductToCartAndGoToCart(2);
    await cartPage.buttonCheckout().click();
    await checkoutOnePage.inputMandatoryValues("First", "Last", "123123");
    await checkoutOnePage.buttonContinue().click();
    await checkoutTwoPage.buttonFinish().click();
    await confirmationPage.buttonBackHome().click();
})

test.only(" Place product in cart from product page | @e2e ", async (
    {cartPage, checkoutOnePage, checkoutTwoPage, confirmationPage, loginPage, productPage, productsPage}) => {

    await loginPage.goToLogin();
    await loginPage.performLoginWithRegularUser();
    await productsPage.clickOnProductImage(1);
    await productPage.buttonaddToCart().click();
    await productPage.buttonBackToProducts().click();

    }
)