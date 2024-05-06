import { test, expect } from '@playwright/test';

test.only('Playwright Extra Locators', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/angularpractice/');
 await page.getByLabel("Employed").click();
 await page.getByLabel("Gender").selectOption("Female");

 await page.getByText("Check me out if you Love IceCreams!").click();
 await page.getByRole("button",{"name":'Submit'}).click();


 await page.getByRole("link",{"name":'Shop'}).click();

 await page.locator("app-card").filter({hasText:'Nokia Edge'}).getByRole("button").click();
 


});