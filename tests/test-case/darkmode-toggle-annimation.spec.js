const { test } = require('@playwright/test');
const { LoginPage } = require('../pages/login');
const { FloatingSwitchAnimationPage } = require('../pages/darkmode-toggle-annimation');

test('Enable “Darkmode Toggle Animation” & change the “Animation Effect”.', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goToLoginPage();
    await loginPage.fillLoginForm();

    const floatingSwitchAnimationPage = new FloatingSwitchAnimationPage(page);
    await floatingSwitchAnimationPage.goToSwitchSettings();
    await floatingSwitchAnimationPage.enableDarkmodeToggleAnimation();
    const animationEffect = 'Vibrate'; // Change this to the desired animation effect
    await floatingSwitchAnimationPage.changeAnimationEffect(animationEffect);
    await floatingSwitchAnimationPage.saveChanges();    // Save Changes
    await floatingSwitchAnimationPage.verifySuccessMessage();

});
