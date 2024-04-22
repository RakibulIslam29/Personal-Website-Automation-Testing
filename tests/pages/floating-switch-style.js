const { test, expect } = require('@playwright/test');
const assert = require('assert');

class FloatingSwitchStylePage {
    constructor(page) {
        this.page = page;
    }

    async goToSwitchSettings() {
        await this.page.getByRole('link', { name: 'WP Dark Mode' }).click();
        await this.page.locator('#toplevel_page_wp-dark-mode').getByRole('link', { name: 'Settings' }).click();
        await this.page.locator('div:nth-child(2) > .wp-dark-mode-admin-sidebar-nav-container > div').click();
        await this.page.getByRole('link', { name: 'Switch Settings' }).click();
    }
    async changeFloatingSwitchStyle() {
        // Assert the visibility of the heading
        const heading = await this.page.getByRole('heading', { name: 'Floating Switch Styles' });
        assert.ok(await heading.isVisible(), 'Floating Switch Styles heading is not visible');

        // Assert the visibility of the text
        const text = await this.page.getByText('Choose the style of the');
        assert.ok(await text.isVisible(), 'Text is not visible');

        // Click on the switch style
        await this.page.locator('.rounded > div:nth-child(2) > div:nth-child(3)').first().click();

        // Click on the Save Changes button
        await this.page.locator('//button[normalize-space()="Save Changes"]').click();
    }
}

module.exports = { FloatingSwitchStylePage };
