import {test, Page, expect} from "@playwright/test";
import { buildUrl } from "./uiUrlBuilder";
import { LoginPage } from "../playwright-practica/pages/login";
import dotenv from "dotenv";

dotenv.config();


test.beforeEach(async({page})=>{
await page.goto (`${process.env.BASE_URL}${buildUrl("login")}`);
});

test.use({ storageState: { cookies: [], origins: [] } });

test ("login-POM-dinamico", async({page})=>{

const loginpage= new LoginPage(page); 

await loginpage.login (process.env.LOGINUSERNAME!, process.env.LOGINPASSWORD!);
await expect(page).toHaveURL(`${process.env.BASE_URL}${buildUrl("profile")}`, { timeout: 20000 });
});