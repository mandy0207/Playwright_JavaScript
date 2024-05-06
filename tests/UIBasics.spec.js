const {test,expect}=require('@playwright/test');



/**
 * 1. browser, page are  playwright fixture means a global variable
 * 2. We can directly have a page fixture instead of opening a browser context
 * 3. In order to run single test case use "only" which will run only one test case in spec file
 */
test("My first Program", async  ({browser})=>{

    const context = await browser.newContext();
    const page =await context.newPage()
    await page.goto("https://demowebshop.tricentis.com/");
    let title=await page.title();
    console.log(title);
    await expect(page).toHaveTitle(title)
   
});

test("Other Way without browser fixture", async  ({page})=>{
   await  page.goto("https://demowebshop.tricentis.com/");
   
   await page.locator(".ico-login").click();
   //fill method also clears text box first and then enters text
   await page.locator("#Email").fill("obsqura24@gmail.com");
   await page.locator("#Password").fill("mypassword");
   await page.locator("[value='Log in']").click();


});


// test.only("Other Way without browser fixture", async  ({page})=>{
//    await  page.goto("https://google.com/");
//    let title=await page.title();
//    console.log(title);
//    await expect(page).toHaveTitle(title)
// });

