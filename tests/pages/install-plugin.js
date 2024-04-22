const { test, expect } = require('@playwright/test');

class InstallPluginPage {
    constructor(page) {
        this.page = page;
    }

    async goToPluginsPage() {
        await this.page.getByRole('link', { name: 'Plugins', exact: true }).click();
        await this.page.getByRole('link', { name: 'Installed Plugins' }).click();
    }

    async searchPlugin(pluginName) {
        const inputField = await this.page.waitForSelector('//input[@id="plugin-search-input"]', { timeout: 10000 });
        await inputField.click();
        await inputField.fill(pluginName);
        await inputField.press('Enter');
    }
    
    async ActivatePlugin(pluginName) {
        await this.page.waitForSelector('//a[@id="activate-wp-dark-mode"]', { state: 'visible', timeout: 5000 });
        await this.page.locator('//a[@id="activate-wp-dark-mode"]').click();
    }


}
module.exports = { InstallPluginPage };
