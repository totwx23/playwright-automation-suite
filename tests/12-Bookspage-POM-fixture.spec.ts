import { test, expect } from "./Bookpage-fixture";


test ("Bookselect-fixture",  async({bookspage, bookname})=>{

await bookspage.gotoBooksPage();

await bookspage.searchBook(bookname);
await expect(bookspage.getBook(bookname)).toBeVisible();
await bookspage.clickBook (bookname);
});