import {test, expect} from "@playwright/test";

test("textbox",async({page})=>{
await page.goto("https://demoqa.com/text-box");
await expect(page.getByRole("heading", { name: "Text Box" })).toBeVisible();
await page.getByPlaceholder ("Full Name").fill("LUIS FERNANDO MOLINA MEDINA");
await page.getByPlaceholder("Name@example.com").fill("fernando_molina10@outlook.com");
await page.getByPlaceholder("Current Address").fill("Anahuac 6348");
await page.locator ("#permanentAddress").fill("Anahuac 6348");
await page.getByRole ("button", {name: "submit"}).click();
await expect (page.locator("#name")).toContainText("LUIS FERNANDO MOLINA MEDINA");
await expect (page.locator("#email")).toContainText("fernando_molina10@outlook.com");
await expect (page.locator("#currentAddress").nth(1)).toContainText("Anahuac 6348");
await expect (page.locator("#permanentAddress").nth(1)).toContainText("Anahuac 6348");
});

test("checkbox",async({page})=>{
await page.goto ("https://demoqa.com/checkbox");
await expect(page.getByText("home")).toBeVisible();
await page.locator('.rc-tree-switcher').click();
await page.getByRole("checkbox", {name: "Desktop"}).click();
await expect(page.getByText("You have selected :")).toBeVisible();
});

test("login", async({page})=>{
await page.goto ("https://demoqa.com/login");
await expect (page.getByText("Login in Book Store")).toBeVisible();
await page.getByPlaceholder("UserName").fill("playwrightTest123");
await page.getByPlaceholder("Password").fill("Testing123!");
await page.getByRole("button", {name: "login"}).click();
await expect (page.getByPlaceholder ("type to search")).toBeVisible();
});