const { test, expect } = require('@playwright/test');
const { Console } = require('console');


test("static dropdown", async ({ page }) => {
    await page.goto("https://selenium.qabible.in/select-input.php");

    /**
     * Use selectOption method
     */
    const dropdown = page.locator("#single-input-field");
    await dropdown.selectOption("Green");
    // await page.pause();

});


test("Non Input dynamic dropdown", async ({ page }) => {
    await page.goto("https://selenium.qabible.in/jquery-select.php");
    await page.evaluate(() => {
        document.querySelector('.select2-selection.select2-selection--multiple').innerText = 'new';
      });

    //await page.pause();

    await page.locator("[class*='-results__options'] li").first().waitFor();
    const optionList = await page.locator("[class*='-results__options'] li").all();
    console.log("Number of elements found:", optionList.length);

    for (const option of optionList) {
        if (await option.textContent() == 'New York') {
            console.log("hello");
            await option.click();
            break;
        }

    }
   
});


test("Input dynamic dropdown", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
   

    const dropdown = page.locator("[placeholder='Type to Select Countries']");
    dropdown.fill("ind");

     await page.locator(".ui-menu-item").first().waitFor();
    const optionList = await page.locator(".ui-menu-item").all();
    console.log("Number of elements found:", optionList.length);

    for (const option of optionList) {
        if (await option.textContent() == 'India') {
            console.log("hello");
            await option.click();
            break;
        }

    }

});





