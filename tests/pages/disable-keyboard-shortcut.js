const { test, expect } = require('@playwright/test');

class DisableKeyboardShortcutPage {
    constructor(page) {
        this.page = page;
    }

    async goToAccessibilitySettings() {
        await this.page.getByRole('link', { name: 'WP Dark Mode' }).click();
        await this.page.locator('#toplevel_page_wp-dark-mode').getByRole('link', { name: 'Settings' }).click();
        await this.page.locator('div:nth-child(3) > .wp-dark-mode-admin-sidebar-nav-container > div').click();
        await this.page.getByRole('link', { name: 'Accessibility' }).click();
    }

    async verifyAccessibilitySettings() {
        await expect(this.page.getByText('Other Accessibility Settings')).toBeVisible();
        await expect(this.page.getByText('Keyboard Shortcut', { exact: true })).toBeVisible();
        await expect(this.page.getByText('Enable keyboard shortcut to')).toBeVisible();
    }

    async disableKeyboardShortcut() {
        await this.page.locator('label').filter({ hasText: 'Keyboard Shortcut' }).locator('span').click();
    }

    async saveChanges() {
        await this.page.getByRole('button', { name: 'Save Changes' }).click();
    }
    async verifySuccessMessage() {
        await expect(this.page.getByText('Saved Successfully')).toBeVisible();
    }
}

module.exports = { DisableKeyboardShortcutPage };
