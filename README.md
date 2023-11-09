# Playwright_Typescript

This is my testing framework in Playwright with Typescript for the demo website https://www.saucedemo.com.

This project is a duplication of the tests from the https://github.com/AdrianCiuciui/Selenium-Java-Maven-TestNG-Project. 
Similar tests, but with different framework and programming language.

Created a custom Fixture, basePage, so that all the class declaration and implementation is no longer done in the test. The test is more readable therefore.

GitHub Actions is set up and it is running after each commit.

Mapped only the necessary elements. Prioritized ID over classes. Also used getByText() since it is a recommendation from playwright.
