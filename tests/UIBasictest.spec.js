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

    const userName = page.locator("input#username");
    const password = page.locator("[type='password']");
    const signInButton = page.locator("#signInBtn");
    const cardTitles = page.locator(".card-body a");
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
     await userName.fill("rahulshettyacademy");
    // await password.fill("Learning@830$3mK2");
    await password.fill("Learning");
    await signInButton.click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText("Incorrect username/password.");
    await userName.fill("");
    await userName.fill("rahulshettyacademy");
    await password.fill("Learning@830$3mK2");
    await signInButton.click();
    
    console.log(await cardTitles.nth(0).textContent());
    const allTitles =  await cardTitles.allTextContents();
    console.log(allTitles);
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


test.only("UI Controls", async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    const userName = page.locator("input#username");
    const password = page.locator("[type='password']");
    const dropdown = page.locator("select.form-control");
    await dropdown.selectOption("consult");
    await page.locator(".radiotextsty").last().click();
    await page.locator("#okayBtn").click();
// Assertion
    await expect(page.locator(".radiotextsty").last()).toBeChecked();
    await page.locator("#terms").click();
    await expect(page.locator("#terms")).toBeChecked();
    await page.locator("#terms").uncheck();
    await expect(page.locator("#terms")).not.toBeChecked();
    expect(await page.locator("#terms").isChecked()).toBeFalsy();

    const documentLink = page.locator("a[href*='documents-request']");
    await expect(documentLink).toHaveAttribute("class", "blinkingText");
    // await expect(page.locator(".blinkingText")).toHaveAttribute("class", "blinkingText");
    await page.pause();  // will pause the test execution and open the browser in debug mode i.e playwright inspector mode. You can inspect the elements and perform actions on them. Once you are done, click on resume button to continue the test execution.
      
});