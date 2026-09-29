
import {test, expect} from "./auth-fixture";


test ("loginpage-fixture", async({loginpage})=>{

await loginpage.page.goto("https://demoqa.com/profile");
  await expect( loginpage.page.getByText(process.env.LOGINUSERNAME!)).toBeVisible();
});