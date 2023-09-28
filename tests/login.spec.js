import { test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import {data} from "../data/testdata";
const { chromium } = require("playwright");

test(" ", async ({ page }) => {
  const login = new LoginPage(page);
  const browser = await chromium.launch();
  await login.gotoLoginPage(page);
});
test.describe("Login Page Test Suite", () => {
  test("should verify the store", async ({ page }) => {
    const login = new LoginPage(page);
    await login.verifyElement(page);
  });
  test("locators", async ({ page }) => {
    await login.gotoLoginPage(page);
  });
  test("should be login the valid", async ({ page }) => {
  
    await login.loginAdmin(data.USERNAME, data.PASSWORD);
  });
});
