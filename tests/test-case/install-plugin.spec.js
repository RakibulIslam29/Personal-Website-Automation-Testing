const { test, chromium } = require('@playwright/test');
const { LoginPage } = require('../pages/login');
const { InstallPluginPage } = require('../pages/install-plugin');

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

test('If Active, navigate to the WP Dark Mode & continue. Otherwise, Install the Plugin and Activate it.', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goToLoginPage();
    await loginPage.fillLoginForm();

    const installPluginPage = new InstallPluginPage(page);
    await installPluginPage.goToPluginsPage();
    await installPluginPage.searchPlugin('WP Dark Mode');
    await installPluginPage.ActivatePlugin();
});
