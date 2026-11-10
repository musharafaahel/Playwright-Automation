const { test } = require('@playwright/test');

test("Client App Test - Account Registration", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.locator(".login-wrapper-footer-text a").click();
    await page.locator("#firstName").fill("Musharaf");
    await page.locator("#lastName").fill("Aahel");
    await page.locator("#userEmail").fill("musharafaahel@gmail.com");
    await page.locator("#userMobile").fill("1234567890");
    await page.locator('select[formcontrolname="occupation"]').selectOption("Student");
    await page.locator("input[value='Male']").check();
    await page.locator("#userPassword").fill("Welcome@123");
    await page.locator("#confirmPassword").fill("Welcome@123");
    await page.locator("input[formcontrolname='required']").check();
    await page.locator("#login").click();
    await page.waitForTimeout(3000);
});

test("Client App Test - Login", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.locator("#userEmail").fill("musharafaahel@gmail.com");
    await page.locator("#userPassword").fill("Welcome@123");
    await page.locator("#login").click();
    await page.waitForLoadState("networkidle");
    //myway
    /*const products = page.locator(".card-body");
    console.log(await products.nth(0).locator("b").textContent());*/
    //Rahul Shetty way
    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles);


    await page.waitForTimeout(3000);
    // This comment just added to check the git commit and push functionality
});