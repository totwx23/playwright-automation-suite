import { test, expect } from '@playwright/test';

let userId : string;
let token : string;

test ("framework", async({request}) => {
    const newUserData = {
        userName: `luisMolina_${Date.now()}`,
        password: "Fernando10!"
    };

    const response= await request.post('https://demoqa.com/Account/v1/User',{
    data: newUserData,
    headers: { 'Content-Type': 'application/json' }
    });
    expect(response.status()).toBe(201);
    const body = await response.json();
    userId = body.userID;
   expect(body).toHaveProperty('userID');
   expect(typeof body.userID).toBe('string');
   expect(body.userID.length).toBeGreaterThan(0);

    const tokenResponse = await request.post("https://demoqa.com/Account/v1/GenerateToken",{
    data: newUserData,
    headers: {'Content-Type': 'application/json'},
});

expect(tokenResponse.status()).toBe(200);
const tokenBody = await tokenResponse.json();
expect (tokenBody).toHaveProperty('token');
expect (tokenBody.status).toBe('Success');

token = tokenBody.token;

const authCheckResponse = await request.post("https://demoqa.com/Account/v1/Authorized",{
    data: newUserData,
    headers: {'Content-Type': 'application/json'}
});

expect(authCheckResponse.status()).toBe(200);

const deleteUser = await request.delete(`https://demoqa.com/Account/v1/User/${userId}`,{

    headers: {'Authorization': `Bearer ${token}`}
    });  
expect(deleteUser.status()).toBe(204);
});