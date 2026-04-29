import { BaseClass } from '../utils/baseclass.js';

export class DashboardPage extends BaseClass {
    constructor(page) {
        super(page);

        this.dashboardURL   = '/insurance/v1/header.php';
        this.logoutLink     = '//input[@value="Log out"]';
        
    }

    async verifyDashboardLoaded() {
        await this.verifyURL(this.dashboardURL);
        await this.verifyVisible(this.logoutLink);
    }

    

    async logout() {
        await this.click(this.logoutLink);
    }
}
