const { test, expect } = require('@playwright/test');
const { Console } = require('console');


test("Text and waits", async ({ page }) => {
    await page.goto("https://selenium.qabible.in/dynamic-load.php");

    await page.locator("#save").click();
    let name = await page.locator(".card-body h5").textContent();
    console.log(name);


});


test("MultipleWebElements", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");


    await page.locator("#user-name").fill("standard_user");
    await page.locator("#password").fill("secret_sauce");
    await page.locator("#login-button").click();

    //wait until page network call loads completely
    await page.waitForLoadState("networkidle");

    //to get text of any webelement
    const heading=await page.locator(".app_logo").textContent();
    console.log(heading);


    //to get List of all texts present inside webelements
    const priceList=await page.locator(".inventory_item_price").allTextContents();
    console.log(priceList);


    /**
     *1.  can interact with any element of array or list using nth technique.
      2. Can interact with first element of array using first method
     * 
     */
    //    await page.locator(".pricebar button").nth(1).click();
    //    await page.locator(".pricebar button").first().click();


    /**
     * can fetch array of webelements using all() method and interact accordingly
     */
    const addToCart = await page.locator(".pricebar button").all();
    console.log("Number of elements found:", addToCart.length);

    for (const button of addToCart) {
        await button.click();
    }


});