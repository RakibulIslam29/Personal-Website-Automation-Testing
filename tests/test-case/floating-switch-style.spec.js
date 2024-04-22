const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/login');
const { FloatingSwitchStylePage } = require('../pages/floating-switch-style');

test('From Settings -> Switch Settings - Change the “Floating Switch Style” from the default selections (Select any one from the available options, except the default selected one).', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goToLoginPage();
    await loginPage.fillLoginForm();

    const floatingSwitchStylePage = new FloatingSwitchStylePage(page);
    await floatingSwitchStylePage.goToSwitchSettings();
    await floatingSwitchStylePage.changeFloatingSwitchStyle();
});
