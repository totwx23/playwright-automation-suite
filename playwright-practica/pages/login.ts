import {Page, Locator} from "@playwright/test"


 export class LoginPage {
    readonly page: Page;
    readonly usernameinput: Locator;
    readonly Password: Locator;
    readonly loginButton: Locator;
    readonly loggedInUser: Locator;
    readonly logginsucces: string = "playwrightTest123"

constructor (page: Page){
this.page= page;
this.usernameinput = page.getByPlaceholder("UserName");
this.Password = page.getByPlaceholder("Password");
this.loginButton = page.getByRole("button", {name: "login"});
this.loggedInUser = page.getByText(this.logginsucces);
}
async gotoLogin (){
    await this.page.goto (`${process.env.BASE_URL}/login`);
}
async login (UserName: string, password: string){
await this.usernameinput.fill(UserName);
await this.Password.fill(password);
await this.loginButton.click();
}
}

