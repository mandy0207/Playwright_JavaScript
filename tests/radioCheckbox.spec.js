const {test,expect}=require('@playwright/test');

test("Checkbox and radio btns", async  ({page})=>{

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    const checkBox= page.locator("#checkBoxOption1");
    await checkBox.click();

    //action is performed outside so await is outside
    await expect(checkBox).toBeChecked();
    //Assertion for checkbox

    console.log(await checkBox.isChecked());

    //to uncheck checkbox
     await checkBox.uncheck();
     
     //action is performed inside so await is inside
     expect(await checkBox.isChecked()).toBeFalsy();
   
});