const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/login');
const { CustomSwitchSizePage } = require('../pages/custome-switch-size');

test('Select Custom Switch Size & Scale it to 220', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goToLoginPage();
    await loginPage.fillLoginForm();

    const customSwitchSizePage = new CustomSwitchSizePage(page);
    await customSwitchSizePage.navigateToSwitchSettings();
    await customSwitchSizePage.selectCustomSwitchSize();
});
