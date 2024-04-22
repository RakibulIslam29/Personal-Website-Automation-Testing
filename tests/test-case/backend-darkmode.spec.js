const { chromium, test } = require('@playwright/test');
const { LoginPage } = require('../pages/login');
const { BackendDarkModePage } = require('../pages/backend-darkmode');

let browser;

test.beforeEach(async () => {
    browser = await chromium.launch();
});

test.afterEach(async () => {
    await browser.close();
});

test('Enable Backend Darkmode from Settings -> General Settings.', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goToLoginPage();
    await loginPage.fillLoginForm();

    const backendDarkModePage = new BackendDarkModePage(page);
    await backendDarkModePage.goToWPDarkModeSettings();
    await backendDarkModePage.goToSettings();
    await backendDarkModePage.goToAdminPanelDarkMode();
    await backendDarkModePage.enableAdminPanelDarkmode();
});
