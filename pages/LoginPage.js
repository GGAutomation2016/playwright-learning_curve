const { expect } = require("@playwright/test");

exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;
    this.navLogin = "#login2";
    this.username = "#loginusername";
    this.password = "#loginpassword";
    this.btnSubmit = ".btn.btn-primary";
  };

  async gotoLoginPage() {
    const base_url = process.env.baseURL;
    // if (!base_url) {
    //   throw new Error("Environment variable MY_URL is not set.");
    // }
    await this.page.goto(base_url);
  };

  async verifyElement(page) {
    const pageTitle = page.title();
    console.log("Page title is: ", pageTitle);
    await expect(page).toHaveTitle("STORE");

    const pageURL = page.url();
    console.log("Page URl is: ", pageURL);
    await expect(page).toHaveURL("https://demoblaze.com/index.html");

    await page.close();
  }
  async loginAdmin(username, password) {
    await this.page.locator(this.navLogin).click();
    await this.page.locator(this.username).fill(username);
    await this.page.locator(this.password).fill(password);
    await this.page.getByRole('button', {name: 'Log in'}).click();
  }
};
