const { Locator } = require('@playwright/test');

class BackendDarkModePage {
    constructor(page) {
        this.page = page;
    }

    async goToWPDarkModeSettings() {
        await this.page.getByRole('link', { name: 'WP Dark Mode' }).click();
    }

    async goToSettings() {
        await this.page.locator('//div[normalize-space()="WP Dark Mode"]').click();
        await this.page.locator('//a[@class="wp-first-item current wp-dark-mode-ignore"]').click();
    }

    async goToAdminPanelDarkMode() {
        await this.page.locator('//a[normalize-space()="Admin Panel Dark Mode"]').click();
    }


    async enableAdminPanelDarkmode() {
        await this.page.locator('//div[@class="relative w-10 h-full rounded-full transition duration-100 bg-slate-200"]').click();
        await this.page.locator('//button[normalize-space()="Save Changes"]').click();
    }
}

module.exports = { BackendDarkModePage };
