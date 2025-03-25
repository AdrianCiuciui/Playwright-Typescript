import { test, expect } from "../../fixtures/basePage";


test(" Place product in cart and checkout | @e2e ", async (
    { cartPage, checkoutOnePage, checkoutTwoPage, confirmationPage, loginPage, productsPage }) => {

    await loginPage.goToLogin();
    await loginPage.performLoginWithStandardUser();

    await productsPage.checkNumberOfProductsNotInTheCart(6);
    await productsPage.checkNumberOfProductsAfterAddingProductToCart(4, 5);
    await productsPage.checkNumberOfProductsAfterAddingProductToCart(0, 4);

    await performCheckoutAndValidateNumberOfProducts({ cartPage, checkoutOnePage, checkoutTwoPage, confirmationPage, productsPage });
})

test(" Place product in cart from product page | @e2e ", async (
    { cartPage, checkoutOnePage, checkoutTwoPage, confirmationPage, loginPage, productPage, productsPage }) => {

    await loginPage.goToLogin();
    await loginPage.performLoginWithStandardUser();

    await productsPage.checkNumberOfProductsNotInTheCart(6);
    await addProductFromDetailsPageAndReturnToProductsPage({ productPage, productsPage }, 1, 5);
    await addProductFromDetailsPageAndReturnToProductsPage({ productPage, productsPage }, 2, 4);

    await performCheckoutAndValidateNumberOfProducts({ cartPage, checkoutOnePage, checkoutTwoPage, confirmationPage, productsPage });
})


async function performCheckoutAndValidateNumberOfProducts({ cartPage, checkoutOnePage, checkoutTwoPage, confirmationPage, productsPage }) {
    await productsPage.buttonCart().click();
    await cartPage.buttonCheckout().click();
    await checkoutOnePage.inputMandatoryValues("First", "Last", "123123");
    await checkoutOnePage.buttonContinue().click();
    await checkoutTwoPage.buttonFinish().click();
    await confirmationPage.buttonBackHome().click();
    await productsPage.checkNumberOfProductsNotInTheCart(6);
}


async function addProductFromDetailsPageAndReturnToProductsPage({ productPage, productsPage }, productToBeAddedIndex: number, productsLeft: number) {
    await productsPage.buttonProductNth().nth(productToBeAddedIndex).click();
    await productPage.buttonaddToCart().click();
    await productPage.buttonBackToProducts().click();
    await productsPage.checkNumberOfProductsNotInTheCart(productsLeft);
}