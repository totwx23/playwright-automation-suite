import {test, expect} from "@playwright/test";
import { LoginPage } from "../playwright-practica/pages/login"
import dotenv from "dotenv";
dotenv.config();

test ("testlogin-env-POM", async({page})=>{

    const loginpage = new LoginPage (page);

await loginpage.gotoLogin ();
await loginpage.login (process.env.LOGINUSERNAME!, process.env.LOGINPASSWORD!);
await expect (page).toHaveURL("${process.env.BASE_URL}/profile", {timeout:20000});
});