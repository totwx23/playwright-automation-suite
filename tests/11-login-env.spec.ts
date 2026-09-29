import {test, expect} from "@playwright/test";
import dotenv from "dotenv";
dotenv.config();

test ("testlogin-env", async({page})=>{

await page.goto(`${process.env.BASE_URL}/login`);
await expect (page.getByText("Login in Book Store")).toBeVisible();
await page.getByPlaceholder("UserName").fill(process.env.LOGINUSERNAME!);
await page.getByPlaceholder("Password").fill(process.env.LOGINPASSWORD!);
await page.getByRole("button", {name: "login"}).click();
await expect (page).toHaveURL("https://demoqa.com/profile", {timeout:20000});

});