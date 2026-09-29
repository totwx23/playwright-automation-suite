import {Page, Locator} from "@playwright/test";

export class BooksPage {
readonly page: Page;
readonly searchinput: Locator;
//readonly confirm: string = "Book added to your collection."

constructor (page:Page){
    this.page= page;
    this.searchinput= page.getByPlaceholder("type to search", {exact: false});
}
async gotoBooksPage(){
    await this.page.goto ("https://demoqa.com/books", {waitUntil: "domcontentloaded"});
}
async searchBook(title:string){
    await this.searchinput.fill(title);
}
getBook(title: string){
    return this.page.getByRole("link", {name: title, exact: true});
}

async clickBook(title: string) {
 await this.getBook(title).click();
}

}

