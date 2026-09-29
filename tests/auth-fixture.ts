import { test as base } from "@playwright/test";
import { LoginPage } from "../playwright-practica/pages/login";
import dotenv from "dotenv";
dotenv.config();

type MyFixtures = {
loginpage : LoginPage;
};

export const test = base.extend<MyFixtures>({

loginpage: async ({ page }, use) => { 
    const loginpage = new LoginPage (page);
    await loginpage.gotoLogin ();
    await loginpage.login (process.env.LOGINUSERNAME!, process.env.LOGINPASSWORD!); 
    await use (loginpage);
}
});
export { expect } from '@playwright/test';