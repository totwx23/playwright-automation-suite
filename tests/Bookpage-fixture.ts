import { test as base } from '@playwright/test';
import { BooksPage } from "../playwright-practica/pages/bookspage"

type MyFixtures ={
    bookspage: BooksPage;
    bookname: string;
};
export const test = base.extend<MyFixtures>({
    
bookspage: async ({ page }, use) => { 

const bookpage = new BooksPage (page);
await use (bookpage);
},
bookname: async ({}, use) => {
    await use("Speaking JavaScript");
  },
});
export { expect } from '@playwright/test';