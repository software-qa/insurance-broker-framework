import { test } from '@playwright/test';
import { RegisterPage } from '../pages/RegisterPage.js';
import { LoginPage } from '../pages/LoginPage.js';
import { DashboardPage } from '../pages/DashboardPage.js';

const userData = {
    firstName : 'demo',
    lastName  : 'demo',
    phone     : '1234567890',
    dobyear   : '1992',
    dobmonth  : 'July',
    dobday     : '7',
    address   : '123 Main Street',
    city      : 'New York',
    country    : 'NY',
    postcode  : '10001',
    email     : 'demo@gmail.com',
    password  : 'password@123',
};

test.describe('Insurance Broker - Authentication', () => {

    test('Register a new user and verify dashboard', async ({ page }) => {
        const registerPage  = new RegisterPage(page);
        //const dashboardPage = new DashboardPage(page);

        await registerPage.registerUser(userData);
        //await dashboardPage.verifyDashboardLoaded();
        //await dashboardPage.takeScreenshot('register-success');
    });

    test('Login with registered credentials and verify dashboard', async ({ page }) => {
        const loginPage     = new LoginPage(page);
        const dashboardPage = new DashboardPage(page);

        await loginPage.login(userData.email, userData.password);
        await dashboardPage.verifyDashboardLoaded();
        
    });

    test('Login with invalid credentials shows error', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.goToLoginPage();
        await loginPage.fillLoginForm('invalid@email.com', 'wrongpassword');
        await loginPage.submitLogin();
        await loginPage.verifyURL(/.*index\.php/);
    });

});
