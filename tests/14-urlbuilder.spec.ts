import { test, expect } from "@playwright/test";
import { buildUrl } from "./uiUrlBuilder";
import dotenv from "dotenv";

dotenv.config();

test("profile", async ({ page }) => {
 
await page.goto (`${process.env.BASE_URL}${buildUrl("profile")}`
);

await expect (page.getByText("Profile")).toBeVisible();
});