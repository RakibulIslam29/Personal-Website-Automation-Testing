const { test, expect } = require('@playwright/test');

class DarkmodeFrontendPage {
    constructor(page) {
        this.page = page;
    }

    async goToFrontendDarkMode() {
        await this.page.getByRole('link', { name: 'WP Dark Mode' }).click();
        await this.page.locator('#toplevel_page_wp-dark-mode').getByRole('link', { name: 'Settings' }).click();
        await this.page.locator('label').filter({ hasText: 'Default Dark Mode' }).locator('span').first().click();
    }    

    async saveChanges() {
        await this.page.getByRole('button', { name: 'Save Changes' }).click();
    }
    
    async verifySuccessMessage() {
        await expect(this.page.getByText('Saved Successfully')).toBeVisible();
    }

    async visitSite() {
        await this.page.locator('//a[normalize-space()="rakibul"]').click();
    }

    async verifyDarkmode() {
        const samplePageElement = await this.page.getByText('rakibul Sample Page');
        await expect(samplePageElement).toBeVisible();
    
        const commitmentElement = await this.page.getByRole('heading', { name: 'A commitment to innovation' });
        await expect(commitmentElement).toBeVisible();
    
        const pioneeringElement = await this.page.getByText('Études is a pioneering firm');
        await expect(pioneeringElement).toBeVisible();
    
        const aboutUsElement = await this.page.getByText('About us');
        await expect(aboutUsElement).toBeVisible();
    }

    async takeScreenshot() {
        await this.page.screenshot({ path: 'tests/static/screenshoot/Forntend.png', fullPage: true });
    }
}

module.exports = { DarkmodeFrontendPage };
