const { test, expect } = require('@playwright/test');

class LoginPage {
    constructor(page) {
        this.page = page;
    }

    async goToLoginPage() {
        await this.page.goto('http://localhost/wordpress/wp-login.php');
        
    }

    async fillLoginForm() {
        await this.page.fill('//input[@id="user_login"]', 'rakibul');
        await this.page.fill('//input[@id="user_pass"]', 'rakibul29');
        await this.page.check('//input[@id="rememberme"]');
        await this.page.click('//input[@id="wp-submit"]');
        await this.page.waitForNavigation({ waitUntil: 'networkidle', timeout: 30000 });
    }
}

module.exports = { LoginPage };
