
import {test, expect} from "@playwright/test"

test("navegación",async({page})=>{
await page.goto("https://demoqa.com/");
await expect(page.locator("img.banner-image")).toBeVisible();
});