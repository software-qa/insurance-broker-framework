import { BaseClass } from '../utils/baseclass.js';

export class LoginPage extends BaseClass {
    constructor(page) {
        super(page);

        this.emailInput   = '#email';
        this.passwordInput = '#password';
        this.loginButton  = '//input[@value="Log in"]';
    }

    async goToLoginPage() {
        await this.navigate('/insurance/v1/index.php');
    }

    async fillLoginForm(email, password) {
        await this.fill(this.emailInput, email);
        await this.fill(this.passwordInput, password);
    }

    async submitLogin() {
        await this.click(this.loginButton);
    }

    async login(email, password) {
        await this.goToLoginPage();
        await this.fillLoginForm(email, password);
        await this.submitLogin();
    }
}
