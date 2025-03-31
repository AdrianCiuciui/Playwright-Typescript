import {test, expect} from "../../fixtures/basePage";




test("Login error message disply and functionality | @component", async (
    {loginPage}) => {
    await loginPage.goToSauceDemoLoginPage();
    await loginPage.checkErrorSpecificElementsAreNOTDisplayed();
    await loginPage.performLoginWithErrorTriggeringUser();
    await loginPage.checkErrorSpecificElementsAreDisplayed();
    await loginPage.errorMessageCloseButton.click();
    await loginPage.checkErrorSpecificElementsAreNOTDisplayed();
})

