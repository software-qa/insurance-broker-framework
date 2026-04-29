import { expect } from '@playwright/test';

export class BaseClass {
    constructor(page) {
        this.page = page;
    }

    async navigate(path) {
        await this.page.goto(path);
    }

    async click(locator) {
        await this.page.locator(locator).click();
    }

    async fill(locator, value) {
        await this.page.locator(locator).fill(value);
    }

    async selectoption(locator,value)
    {
        await this.page.locator(locator).selectOption(value);
    }

    async getText(locator) {
        return await this.page.locator(locator).innerText();
    }

    async isVisible(locator) {
        return await this.page.locator(locator).isVisible();
    }

    async waitForURL(pattern) {
        await this.page.waitForURL(pattern);
    }

    async verifyURL(pattern) {
        await expect(this.page).toHaveURL(pattern);
    }

    async verifyVisible(locator) {
        await expect(this.page.locator(locator)).toBeVisible();
    }

    async takeScreenshot(name) {
        await this.page.screenshot({ path: `screenshots/${name}.png` });
    }
}
