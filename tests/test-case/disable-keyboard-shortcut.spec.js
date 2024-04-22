const { test } = require('@playwright/test');
const { LoginPage } = require('../pages/login');
const { DisableKeyboardShortcutPage } = require('../pages/disable-keyboard-shortcut');

test('Disable Keyboard Shortcut from the Accessibility Settings.', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goToLoginPage();
    await loginPage.fillLoginForm();
    
    const disableKeyboardShortcutPage = new DisableKeyboardShortcutPage(page);
    await disableKeyboardShortcutPage.goToAccessibilitySettings();
    await disableKeyboardShortcutPage.verifyAccessibilitySettings();
    await disableKeyboardShortcutPage.disableKeyboardShortcut();
    await disableKeyboardShortcutPage.saveChanges();    // Save Changes
    await disableKeyboardShortcutPage.verifySuccessMessage();

});
