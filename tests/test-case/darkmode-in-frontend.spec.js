const { test } = require('@playwright/test');
const { LoginPage } = require('../pages/login');
const { DarkmodeFrontendPage } = require('../pages/darkmode-in-frontend');

test('Validate whether the Darkmode is working or not from the Frontend.', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goToLoginPage();
    await loginPage.fillLoginForm();

    const darkmodeFrontendPage = new DarkmodeFrontendPage(page);
    await darkmodeFrontendPage.goToFrontendDarkMode();
    await darkmodeFrontendPage.saveChanges();
    await darkmodeFrontendPage.verifySuccessMessage();
    await darkmodeFrontendPage.visitSite();
    await darkmodeFrontendPage.verifyDarkmode();
    await darkmodeFrontendPage.takeScreenshot();    // Take a screenshot
});
