const { test, chromium } = require('@playwright/test');
const { LoginPage } = require('../pages/login');
const { NavigateDarkModePage } = require('../pages/navigate-wpdarkmode');

let browser;

test.beforeAll(async () => {
    browser = await chromium.launch();
});

test.afterAll(async () => {
    await browser.close();
});

test.beforeEach(async ({ page }) => {
    page.setDefaultTimeout(10000);
});

test('Navigate to the WP Dark Mode.', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goToLoginPage();
    await loginPage.fillLoginForm();

    const navigateDarkModePage = new NavigateDarkModePage(page);
    await navigateDarkModePage.goToInstalledPlugins();
    await navigateDarkModePage.searchInstalledPlugin('WP Dark Mode');
    await navigateDarkModePage.verifyDarkModeDetails();
});
