import { test as setup, expect } from '@playwright/test';
import { LoginPage } from "../playwright-practica/pages/login"

setup ("login", async ({page}) => {
    
const authFile = 'playwright/.auth/user.json';

const loginpage = new LoginPage (page);

await loginpage.gotoLogin ();
await loginpage.login ('playwrightTest123', 'Testing123!');

await expect (page).toHaveURL ("https://demoqa.com/profile");

await page.context().storageState({path: authFile});
});