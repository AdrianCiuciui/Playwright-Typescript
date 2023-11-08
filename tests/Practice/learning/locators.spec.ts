import {test, expect, selectors} from "@playwright/test";



test("New GetBy Methods", async( {page} ) => {

    await page.goto("https://todomvc.com/examples/react/#/");

    await page.getByPlaceholder("What needs to be done?").fill("Hello dear world");
    await page.getByPlaceholder("What needs to be done?").press("Enter");

    await expect(page.getByText("Hello dear world")).toBeVisible();

    await selectors.setTestIdAttribute("data-reactid");
    await page.getByTestId(".0.0.1").fill("Hello dear world");
    await page.getByPlaceholder("What needs to be done?").press("Enter");


});



test.only("New GetBy Methods, but with Google", async( {page} ) => {

    await page.goto("https://www.google.com");
    await page.getByText("Accept").last().click();

    await page.getByTitle("Caută").fill("Buenas noches");

});