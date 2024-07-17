import { Page } from "@playwright/test";
import { LoginPage } from "./LoginPage";
import { BaseApplicationPage } from "./BaseApplicationPage";
import { Homepage } from "./Homepage";
import { ManageSubscriptions } from "../Components/ManageSubscriptions";

export class PageManager {
    page: Page;
    loginPage;
    baseApplicationPage;
    homepage;
    manageSubscriptions;

    constructor(page) {
        this.page = page;
        this.loginPage = new LoginPage(page);
        this.baseApplicationPage = new BaseApplicationPage(page);
        this.homepage = new Homepage(page);
        this.manageSubscriptions = new ManageSubscriptions(page);
    };
};