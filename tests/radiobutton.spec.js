import { expect, test } from "@playwright/test";

test("handle radio button  ", async ({ page }) => {

  await page.goto(
    "https://demo.nopcommerce.com/register?returnUrl=%2F"
  );
    //radio button
    //1st way
    await page.locator('#gender-male').check();
    //2nd way
    // await page.check('#gender-male'); 
    //assertion 
    await expect(await page.locator('#gender-male')).toBeChecked();
    await expect(await page.locator('#gender-male').isChecked()).toBeTruthy();

    await expect(await page.locator('#gender-female').isChecked()).toBeFalsy();





    await page.waitForTimeout(5000) //delay
    
});
