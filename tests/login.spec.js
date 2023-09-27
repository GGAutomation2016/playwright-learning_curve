import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test.beforeEach(async ({ page }) => {
  const login = new LoginPage(page);
  await login.gotoLoginPage();
});
test.describe("Login Page Test Suite", () => {
  test("should be login the valid", async ({ page }) => {
    const login = new LoginPage(page);

    const username = process.env.USERNAME;
    const password = process.env.PASSWORD;
    await login.loginAdmin(username, password);
  });
});
