import { expect, test } from "@playwright/test";

test("assertions built in ", async ({ page }) => {

  await page.goto(
    "https://demo.nopcommerce.com/register?returnUrl=%2F"
  );
  await expect(page).toHaveURL('https://demo.nopcommerce.com/register?returnUrl=%2F');

  //title
    await expect(page).toHaveTitle('nopCommerce demo store. Register');
});
