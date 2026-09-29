import {test, expect} from "@playwright/test";

test("checkbox",async({page})=>{
await page.goto ("https://demoqa.com/checkbox");
await expect(page.getByText("home")).toBeVisible();
await page.locator('.rc-tree-switcher').click();
await page.getByRole("checkbox", {name: "Desktop"}).click();
await expect(page.getByText("You have selected :")).toBeVisible();
});

