import { expect, test } from "@playwright/test";

test("handle input box  ", async ({ page }) => {

  await page.goto(
    "https://demo.nopcommerce.com/register?returnUrl=%2F"
  );
    await expect(await page.locator("#FirstName")).toBeVisible();
    //when the data has no value
    await expect(await page.locator("#FirstName")).toBeEmpty();
    //when the data can be edit or not the value
    await expect(await page.locator("#FirstName")).toBeEditable();
    //function the will pass the element is able to enable
    await expect(await page.locator("#FirstName")).toBeEnabled();

    await page.fill("#FirstName", "reyes");

    //await page.locator("#FirstName").fill("reyes");

    await page.waitForTimeout(5000) //delay

});
