const { chromium, test } = require('@playwright/test');
const { LoginPage } = require('../pages/login');
const { AdminDashboardPage } = require('../pages/validate-admindashboard');

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

test('Validate whether the Darkmode is working or not on the Admin Dashboard.', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goToLoginPage();
    await loginPage.fillLoginForm();

    const adminDashboardPage = new AdminDashboardPage(page);
    await adminDashboardPage.goToAdminDashboard();
    await adminDashboardPage.verifyDarkmode();
    await adminDashboardPage.takeScreenshot('tests/static/screenshoot/Darkmode.png');
});
