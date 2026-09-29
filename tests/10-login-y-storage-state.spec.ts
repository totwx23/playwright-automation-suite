import {test, type Page, expect} from "@playwright/test";
import { BooksPage } from "../playwright-practica/pages/bookspage";
import { LoginPage } from "../playwright-practica/pages/login";


test.describe.configure({ mode: 'serial' });

test ("addBook", async({page})=>{
const BookPage = new BooksPage (page);
const BookName = "Speaking JavaScript";

await page.goto("https://demoqa.com/profile", {waitUntil: "domcontentloaded"});
await page.getByRole("button", {name: "Go To Book Store" }).click();
await expect (page).toHaveURL("https://demoqa.com/books");
await BookPage.searchBook(BookName);
await expect(BookPage.getBook(BookName)).toBeVisible();
await BookPage.clickBook (BookName);

page.once('dialog', async (dialog) => {
expect(dialog.message()).toContain('Book added to your collection.');
await dialog.accept();
 });
  await page.getByRole("button", { name: "Add To Your Collection" }).click();
});

test ("deleteBook", async({page})=>{
await page.goto("https://demoqa.com/profile", {waitUntil: "domcontentloaded"});

await page.locator('#delete-record-9781449325862').click();
page.once("dialog", async (dialog) =>  {
    expect(dialog.message()).toContain("Book deleted.");
    await dialog.accept();
});
await page.getByRole("button", {name: "OK", exact: true}).click();

});