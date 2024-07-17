import { BaseApplicationPage } from "../Pages/BaseApplicationPage";

export class LoginPage extends BaseApplicationPage {
    constructor(page) {
        super(page);
    };

    TextBoxes = {
        Login: this.page.locator("//input[contains(@name, 'j_username')]"),
        Password: this.page.locator("//input[contains(@name, 'password')]"),
    };

    Buttons = {
        Continue: this.page.locator('[class="fn-button__text"]'),
        SignIn: this.page.locator('.uid-login-as__submit-button'),
        AcceptAllCookies: this.page.locator('#truste-consent-button.truste-button1'),
        RejectAll: this.page.locator('#truste-consent-required.truste-button1'),
        VievAndChangeCookies: this.page.locator('#truste-show-consent.truste-button2'),
    }; 

    Lines = {
        ForgotPassword: this.page.locator("[.uid-link ]"),
    }

    async LogIn(login: string, password: string) {
        await this.TextBoxes.Login.fill(login);
        await this.Buttons.Continue.click();
        await this.Buttons.AcceptAllCookies.click();
        await this.page.waitForTimeout(1500);
        await this.TextBoxes.Password.fill(password); 
        await this.Buttons.SignIn.click(); 
    }
};