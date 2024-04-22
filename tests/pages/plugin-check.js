const { test, expect } = require('@playwright/test');

class PluginInstallPage {
    constructor(page) {
        this.page = page;
    }

    async goToPluginsPage() {
        await this.page.getByRole('link', { name: 'Plugins', exact: true }).click();
    }

    async goToInstalledPluginsPage() {
        await this.page.getByRole('link', { name: 'Installed Plugins' }).click();
    }

    async searchInstalledPlugin(pluginName) {
        const searchInput = await this.page.$('input#plugin-search-input');
        await searchInput.click();
        await searchInput.fill(pluginName);
        await searchInput.press('Enter');
    }

    async verifyPluginIsInstalled() {
        await this.page.waitForSelector('text=WP Dark Mode', { state: 'visible' });
        await this.page.waitForSelector('text=Activate | Delete', { state: 'visible' });
        await this.page.waitForSelector('text=WP Dark Mode automatically', { state: 'visible' });
        await this.page.waitForSelector('text=Version 5.0.4 | By WPPOOL |', { state: 'visible' });
    }
    
    
}

module.exports = { PluginInstallPage };
