const { test } = require('@playwright/test');
const { LoginPage } = require('../pages/login');
const { FloatingSwitchPositionPage } = require('../pages/floating-switch-position');

test('From Settings -> Switch Settings - Change the Floating Switch Position (Left Bottom).', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goToLoginPage();
    await loginPage.fillLoginForm();

    const switchPositionPage = new FloatingSwitchPositionPage(page);
    await switchPositionPage.goToSwitchSettings();    // Navigate to Switch Settings
    await switchPositionPage.verifySwitchCustomization();
    await switchPositionPage.changeSwitchPosition();
    await switchPositionPage.saveChanges();    // Save changes
    await switchPositionPage.verifySuccessMessage();
});
