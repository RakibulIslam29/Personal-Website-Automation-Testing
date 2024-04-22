const { test, expect } = require('@playwright/test');

class NavigateDarkModePage {
    constructor(page) {
        this.page = page;
    }

    async goToInstalledPlugins() {
        await this.page.getByRole('link', { name: 'Plugins', exact: true }).click();
        await this.page.getByRole('link', { name: 'Installed Plugins' }).click();
    }

    async searchInstalledPlugin(pluginName) {
        await this.page.locator('//input[@id="plugin-search-input"]').click();
        await this.page.locator('//input[@id="plugin-search-input"]').fill(pluginName);
        await this.page.locator('//input[@id="plugin-search-input"]').press('Enter');
    }

    async verifyDarkModeDetails() {
        await this.page.getByRole('link', { name: 'WP Dark Mode', exact: true }).isVisible();
        await this.page.getByText('WP Dark Mode automatically enables a stunning dark mode of your website based on').isVisible();
        await this.page.getByText('Version 5.0.4 | By WPPOOL | View details').isVisible();
    }
}

module.exports = { NavigateDarkModePage };