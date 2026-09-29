import {test, expect} from "@playwright/test";

test("login", async({page})=>{
await page.goto ("https://demoqa.com/login");
await expect (page.getByText("Login in Book Store")).toBeVisible();
await page.getByPlaceholder("UserName").fill("playwrightTest123");
await page.getByPlaceholder("Password").fill("Testing123!");
await page.getByRole("button", {name: "login"}).click();
await expect (page.getByPlaceholder ("type to search")).toBeVisible();
});