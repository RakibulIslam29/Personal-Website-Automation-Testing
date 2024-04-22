const { test, expect } = require('@playwright/test');

class AdminDashboardPage {
    constructor(page) {
        this.page = page;
    }

    async goToAdminDashboard() {
        await this.page.locator('//a[@class="wp-first-item wp-has-submenu wp-has-current-submenu wp-menu-open menu-top menu-top-first menu-icon-dashboard menu-top-last wp-dark-mode-ignore"]').click();
    }

    async verifyDarkmode() {
        await this.page.locator('//span[normalize-space()="Dark"]').click();
    }

    async takeScreenshot(path) {
        await this.page.screenshot({ path, fullPage: true });
    }
}

module.exports = { AdminDashboardPage };
