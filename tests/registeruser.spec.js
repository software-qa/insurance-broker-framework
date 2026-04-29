import {test,expect} from   '@playwright/test';


test ('Register User', async ({page}) => {

    await page.goto('/insurance/v1/index.php');

    await page.locator('//a[text()="Register"]').click();

    await page.locator('#user_firstname').fill('rekha');

    await page.locator('#user_surname').fill('danappala');

    await page.locator('#user_phone').fill('1234567890');

    await page.locator('[name="user_dateofbirth"]').fill('1990-01-01');

    await page.locator('#user_address').fill('123 Main Street');

    await page.locator('#user_city').fill('New York');

    await page.locator('#user_state').fill('NY');

    await page.locator('#user_postcode').fill('10001');

    await page.locator('#user_email').fill('rekha@gmail.com');

    await page.locator('#user_password').fill('password123');

    await page.locator('#user_confirm_password').fill('password123');

    await page.locator('//input[@value="Register"]').click();

    await expect(page).toHaveURL(/.*dashboard/);

    await page.screenshot({path:'registeruser.png'});

})