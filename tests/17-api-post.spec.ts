import { test, expect } from '@playwright/test';

let userId: string;
let token: string; 

test("Api-Post", async({request}) => {

const newUserData = {
userName: `totwx233`,
password: `Ferrocarril10!`
};

const response = await request.post('https://demoqa.com/account/v1/User',{
    data: newUserData,
    headers: { 'Content-Type': 'application/json'},
  });

expect(response.status()).toBe(201);
const body = await response.json();
userId = body.userID;

const tokenResponse = await request.post('https://demoqa.com/Account/v1/GenerateToken', {
    data: newUserData,
    headers: { 'Content-Type': 'application/json' },
  });

const tokenBody = await tokenResponse.json();
  token = tokenBody.token;
});

test.afterEach(async ({ request }) => {
    
  if (userId && token) {

 const deleteResponse = await request.delete(`https://demoqa.com/Account/v1/User/${userId}`, 
        {
      headers: {
        'Authorization': `Bearer ${token}`
      }
  });  
expect(deleteResponse.status()).toBe(204);
  }
});
