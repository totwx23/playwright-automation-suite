import {test, expect} from "@playwright/test";
import { LoginPage } from "../playwright-practica/pages/login"

test ("testlogin", async({page})=>{

const loginpage = new LoginPage (page);

await loginpage.gotoLogin ();
await loginpage.login ('playwrightTest123', 'Testing123!');

await expect(loginpage.loggedInUser).toBeVisible();
});