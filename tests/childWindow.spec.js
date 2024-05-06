const {test,expect}=require('@playwright/test');

test("Checkbox and radio btns", async  ({browser})=>{

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://the-internet.herokuapp.com/windows");

    /**
     * Race condition
     * 
     * before clicking we have to wait for event when new page is opened
     * and then click.
     *  This newPage array will resolve promise of two parallel events and once promise is fulfilled , it will come out
     */
    const [newPage]=await Promise.all([

            context.waitForEvent('page'),
            page.locator(".example a").click(),
     ])

    await expect(newPage).toHaveTitle("New Window");
    


    


    
   
});