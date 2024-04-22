const { test, expect } = require('@playwright/test');

class FloatingSwitchPositionPage {
    constructor(page) {
        this.page = page;
    }

    async goToSwitchSettings() {
        await this.page.getByRole('link', { name: 'WP Dark Mode' }).click();
        await this.page.locator('#toplevel_page_wp-dark-mode').getByRole('link', { name: 'Settings' }).click();
        await this.page.locator('div:nth-child(2) > .wp-dark-mode-admin-sidebar-nav-container > div').click();
        await this.page.getByRole('link', { name: 'Switch Settings' }).click();
    }

    async verifySwitchCustomization() {
        await expect(this.page.getByText('Switch Customization')).toBeVisible();
        await expect(this.page.getByText('Switch Position Choose the')).toBeVisible();
    }

    async changeSwitchPosition() {
        await this.page.locator('div:nth-child(4) > div > div > div:nth-child(2) > div:nth-child(2) > div').first().click(); // Left Bottom
    }

    async saveChanges() {
        await this.page.getByRole('button', { name: 'Save Changes' }).click();
    }

    async verifySuccessMessage() {
        await expect(this.page.getByText('Saved Successfully')).toBeVisible();
    }
}

module.exports = { FloatingSwitchPositionPage };
