# Playwright_Typescript

Automation project for https://www.saucedemo.com

Some e2e test can also be found in https://github.com/AdrianCiuciui/Selenium-Java-Maven-TestNG-Project. 

Created a custom Fixture, basePage, so that all the class declaration and implementation is no longer done in the test. The test is more readable therefore.

GitHub Actions is set up and it is running after each commit on the main branch.

Mapped only the necessary elements. Prioritized ID over classes. 
Used getByText() since it is a recommendation from playwright.
