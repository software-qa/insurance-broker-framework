import { BaseClass } from '../utils/baseclass.js';

export class RegisterPage extends BaseClass {
    constructor(page) {
        super(page);

        this.registerLink      = '//a[text()="Register"]';
        this.firstNameInput    = '#user_firstname';
        this.lastNameInput     = '#user_surname';
        this.phoneInput        = '#user_phone';
        
        this.dobyear          = '//select[@id="user_dateofbirth_1i"]';
        this.dobmonth         = '//select[@id="user_dateofbirth_2i"]';
        this.dobday           = '//select[@id="user_dateofbirth_3i"]';
        this.addressInput      = '#user_address_attributes_street';
        this.cityInput         = '#user_address_attributes_city';
        this.countryInput       = '#user_address_attributes_county';
        this.postcodeInput     = '#user_address_attributes_postcode';
        this.emailInput        = '#user_user_detail_attributes_email';
        this.passwordInput     = '#user_user_detail_attributes_password';
        this.confirmPwdInput   = '#user_user_detail_attributes_password_confirmation';
        this.registerButton    = '//input[@onclick="validateReg();return false;"]';
    }

    async goToRegisterPage() {
        await this.navigate('/insurance/v1/index.php');
        await this.click(this.registerLink);
    }

    async fillRegistrationForm({ firstName, lastName, phone, dobyear,dobmonth, dobday,address, city, country, postcode, email, password }) {
        await this.fill(this.firstNameInput, firstName);
        await this.fill(this.lastNameInput, lastName);
        await this.fill(this.phoneInput, phone);
        await this.selectoption(this.dobyear, dobyear);
        await this.selectoption(this.dobmonth, dobmonth);
        await this.selectoption(this.dobday, dobday);
        await this.fill(this.addressInput, address);
        await this.fill(this.cityInput, city);
        await this.fill(this.countryInput, country);
        await this.fill(this.postcodeInput, postcode);
        await this.fill(this.emailInput, email);
        await this.fill(this.passwordInput, password);
        await this.fill(this.confirmPwdInput, password);
    }

    async submitRegistration() {
        await this.click(this.registerButton);
    }

    async registerUser(userData) {
        await this.goToRegisterPage();
        await this.fillRegistrationForm(userData);
        await this.submitRegistration();
    }
}
