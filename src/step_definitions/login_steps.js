import {Given, Then, When} from 'cucumber';
import homePage from "../pages/homePage";
import loginPage from "../pages/loginPage";
import dashboardPage from "../pages/dashboardPage";

Given(/^I visit home page$/, function () {
    homePage.visit("0123-456-789");
});
When(/^I navigate to login page$/, function () {
    homePage.clickSignInButton();
    loginPage.verify();
});
When(/^I enter valid credentials$/, function () {
    loginPage.enterCredentials("someone@test.com", "12345");
    loginPage.clickLoginButton();
});
Then(/^I can see my username displayed on the page$/, function () {
    dashboardPage.verify("Testo Testi")
});
