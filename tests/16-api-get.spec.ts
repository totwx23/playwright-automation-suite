import { test, expect } from '@playwright/test';


test("Api-Get", async({request}) => {
    const response = await request.get('https://demoqa.com/BookStore/v1/Books');

  expect (response.status()).toBe(200);

  const body = await response.json();

  expect(body).toHaveProperty("books");
  expect(Array.isArray(body.books)).toBeTruthy();
  expect(body.books.length).toBeGreaterThan(0);
  expect(body.books[0]).toHaveProperty("title");

  expect(body.books).toContainEqual(
    expect.objectContaining({
        title: 'Speaking JavaScript'
    })
  )

});