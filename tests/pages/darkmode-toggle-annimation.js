const { test, expect } = require('@playwright/test');

class FloatingSwitchAnimationPage {
    constructor(page) {
        this.page = page;
    }

    async goToSwitchSettings() {
        await this.page.getByRole('link', { name: 'WP Dark Mode' }).click();
        await this.page.locator('#toplevel_page_wp-dark-mode').getByRole('link', { name: 'Settings' }).click();
        await this.page.locator('div:nth-child(2) > .wp-dark-mode-admin-sidebar-nav-container > div').click();
        await this.page.getByRole('link', { name: 'Switch Settings' }).click();
    }

    async enableDarkmodeToggleAnimation() {
        await expect(this.page.getByText('Switch Attention Effect')).toBeVisible();
        await expect(this.page.getByText('Enable to choose an animation')).toBeVisible();
        await this.page.locator('label').filter({ hasText: 'Switch Attention Effect' }).locator('div').nth(1).click();
    }

    async changeAnimationEffect(effect) {
        await expect(this.page.getByText(effect)).toBeVisible();
        await this.page.locator('#switch-animation > div:nth-child(2) > div:nth-child(2) > .flex').click();
    }

    async saveChanges() {
        await this.page.getByRole('button', { name: 'Save Changes' }).click();
    }
    
    async verifySuccessMessage() {
        await expect(this.page.getByText('Saved Successfully')).toBeVisible();
    }
}

module.exports = { FloatingSwitchAnimationPage };
