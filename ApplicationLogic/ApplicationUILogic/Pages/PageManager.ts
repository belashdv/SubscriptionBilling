import { Page } from "@playwright/test";
import { LoginPage } from "./LoginPage";
import { BaseApplicationPage } from "./BaseApplicationPage";
import { Homepage } from "./Homepage";

export class PageManager {
    page: Page;
    loginPage;
    baseApplicationPage;
    homepage;

    constructor(page) {
        this.page = page;
        this.loginPage = new LoginPage(page);
        this.baseApplicationPage = new BaseApplicationPage(page);
        this.homepage = new Homepage(page);
    };
};