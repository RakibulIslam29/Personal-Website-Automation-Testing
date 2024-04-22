const { test, expect } = require('@playwright/test');

class CustomSwitchSizePage {
    constructor(page) {
        this.page = page;
    }

    async navigateToSwitchSettings() {
        await this.page.getByRole('link', { name: 'WP Dark Mode' }).click();
        await this.page.locator('#toplevel_page_wp-dark-mode').getByRole('link', { name: 'Settings' }).click();
        await this.page.locator('div:nth-child(2) > .wp-dark-mode-admin-sidebar-nav-container > div').click();
        await this.page.getByRole('link', { name: 'Switch Settings' }).click();
    }

    async selectCustomSwitchSize() {
        await expect(this.page.getByText('Switch Customization')).toBeVisible();
        await expect(this.page.getByText('Floating Switch Size Choose')).toBeVisible();
        await this.page.locator('div').filter({ hasText: /^L$/ }).click(); 
        await this.page.getByRole('button', { name: 'Save Changes' }).click();
    }
}

module.exports = { CustomSwitchSizePage };
