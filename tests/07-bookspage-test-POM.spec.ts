import {test, expect} from "@playwright/test";
import { BooksPage } from "../playwright-practica/pages/bookspage"

test ("BookSelect", async({page})=>{

const BookPage = new BooksPage (page);
const BookName = "Speaking JavaScript";

await BookPage.gotoBooksPage();

await BookPage.searchBook(BookName);
await expect(BookPage.getBook(BookName)).toBeVisible();
await BookPage.clickBook (BookName);
}); 