import {test, type Page, expect} from "@playwright/test";
import { LoginPage } from "../playwright-practica/pages/login";

let page: Page;
let loginpage: LoginPage;

test.beforeAll(async ({ browser }) => {
    page= await browser.newPage();
    loginpage = new LoginPage (page);
    await loginpage.gotoLogin ();
await loginpage.login ('playwrightTest123', 'Testing123!');
await expect(page.getByText("playwrightTest123")).toBeVisible();
});
test("Prueba 2: Interactuar con la página ya logueado", async () => {
     await page.getByRole("button", { name: "Submit" }).click();
  });
test.afterAll(async () => {
    await page.close();
  });
