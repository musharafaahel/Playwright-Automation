const { test, expect } = require("@playwright/test");

test('Verify Client App', async ({ page }) => {

    await page.goto('https://example.com');

    await expect(page).toHaveTitle(/Example/);

});