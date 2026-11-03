const { test, expect } = require('@playwright/test');

//Older version of anonymous function
test('First Playwright Test', async function(){
    // Playwright code goes here
});

//Newer version of anonymous function
test.only('First Playwright Test - 1', async ({ browser }) => {
    // Playwright code goes here
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
     await page.locator("input#username").fill("rahulshettyacademy");
    // await page.locator("[type='password']").fill("Learning@830$3mK2");
    await page.locator("[type='password']").fill("Learning");
    await page.locator("#signInBtn").click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText("Incrrect username/password.");
});

//ANother way of writing the same test
test('First Playwright Test - 2', async ({ page }) => {
    // Playwright code goes here
    await page.goto('https://www.google.com');
    //get the title of the page and assert it
    const title = await page.title();
    console.log(title);
    await expect(page).toHaveTitle('Google');
   

});