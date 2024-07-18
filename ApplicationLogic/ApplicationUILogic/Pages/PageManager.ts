import { Page } from "@playwright/test";
import { LoginPage } from "./LoginPage";
import { BaseApplicationPage } from "./BaseApplicationPage";
import { Homepage } from "./Homepage";
import { ManageSubscriptions } from "../Components/ManageSubscriptions";
import { ManageBillingData } from "../Components/ManageBillingData";
import { Subscription } from "../Components/Subscription";

export class PageManager {
    page: Page;
    loginPage;
    baseApplicationPage;
    homepage;
    manageSubscriptions;
    manageBillingData;
    subscription;

    constructor(page) {
        this.page = page;
        this.loginPage = new LoginPage(page);
        this.baseApplicationPage = new BaseApplicationPage(page);
        this.homepage = new Homepage(page);
        this.manageSubscriptions = new ManageSubscriptions(page);
        this.manageBillingData = new ManageBillingData(page);
        this.subscription = new Subscription(page);
    };
};