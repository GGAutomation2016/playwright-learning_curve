exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;
    this.navLogin = "#login2";
    this.username = "#loginusername";
    this.password = "#loginpassword";
    this.btnSubmit = ".btn.btn-primary";
  }
  async gotoLoginPage() {
    const base_url = process.env.baseURL; 
    // const index = '/';
    // const url = base_url + index;

    await this.page.goto(base_url);
  }
  async loginAdmin(username, password) {
    await this.page.locator(this.navLogin).click();
    await this.page.locator(this.username).fill(username);
    await this.page.locator(this.password).fill(password);
    await this.page.locator(this.btnSubmit).click();
  }
};
