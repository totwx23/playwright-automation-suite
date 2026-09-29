import {test, type Page, expect} from "@playwright/test";
import { BooksPage } from "../playwright-practica/pages/bookspage"

const URL = "https://demoqa.com/books";

test.beforeEach(async({page})=>{
await page.goto(URL);
});

test ("BookSelect", async({page})=>{

const BookPage = new BooksPage (page);
const BookName = "Speaking JavaScript";

await BookPage.searchBook(BookName);
await expect(BookPage.getBook(BookName)).toBeVisible();
await BookPage.clickBook (BookName);
}); 