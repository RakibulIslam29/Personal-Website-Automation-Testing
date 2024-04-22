const { test, chromium } = require('@playwright/test');
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

test('Login Test', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goToLoginPage();
    await loginPage.fillLoginForm();
});
