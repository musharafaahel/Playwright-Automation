const { test, expect } = require('@playwright/test');

//Older version of anonymous function
test('First Playwright Test', async function(){
    // Playwright code goes here
});

//Newer version of anonymous function
test('First Playwright Test - 1', async ({ browser }) => {
    // Playwright code goes here
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
});

//ANother way of writing the same test
test.only('First Playwright Test - 2', async ({ page }) => {
    // Playwright code goes here
    await page.goto('https://www.google.com');
    //get the title of the page and assert it
    const title = await page.title();
    console.log(title);
    await expect(page).toHaveTitle('Google');
});