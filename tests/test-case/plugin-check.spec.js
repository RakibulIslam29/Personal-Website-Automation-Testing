const { test, chromium } = require('@playwright/test');
const { PluginInstallPage } = require('../pages/plugin-check');
const { LoginPage } = require('../pages/login');

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

test('Check whether the “WP Dark Mode” Plugin is Active or not.', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goToLoginPage();
    await loginPage.fillLoginForm();

    const pluginInstallPage = new PluginInstallPage(page);
    await pluginInstallPage.goToPluginsPage();
    await pluginInstallPage.goToInstalledPluginsPage();
    await pluginInstallPage.searchInstalledPlugin('WP Dark Mode');
    await pluginInstallPage.verifyPluginIsInstalled();
});
