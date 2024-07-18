import { Locator } from "@playwright/test";
import { BaseApplicationPage } from "../Pages/BaseApplicationPage";

export class Subscription extends BaseApplicationPage {
    constructor(page) {
        super(page);
    };

    Containers = { 
        HeadContainer: this.page.locator('[id="application-Subscriptions-list-component---subscriptionView--subscriptionDetailPageLayout-headerTitle"]'),
        TitleContainer: this.page.locator('[id="application-Subscriptions-list-component---subscriptionView--subscriptionDetailPageLayout-headerContent"]'),
        TabContainer: this.page.locator('[id="application-Subscriptions-list-component---subscriptionView--subscriptionDetailPageLayout-anchorBar"]'),
        MainContainer: this.page.locator('[class="sapUxAPObjectPageSectionContainer"]'),
        BottomContainer: this.page.locator('//div[@id="__toolbar4"]'),
     };

    Elements = {
        SubscriptionNumber: this.page.locator('//span[@id="application-Subscriptions-list-component---subscriptionView--subscriptionDocumentNumber-inner"]'),
        CustomerPurchaseReference: this.page.locator(`//div[@id='application-Subscriptions-list-component---subscriptionView--subscriptionDetailsTabHeaderInfoDetailView--customerPurchaseReferenceInput-content']`),
        WithdrawalPeriod: this.page.locator(`//input[@id="application-Subscriptions-list-component---subscriptionView--subscriptionTermsView--withdrawalPeriodInput-inner"]`),
        TermOfNotice: this.page.locator(`//input[@id='application-Subscriptions-list-component---subscriptionView--subscriptionTermsView--termOfNoticeInput-inner']`),
        MinimumTerm: this.page.locator(`//input[@id='application-Subscriptions-list-component---subscriptionView--subscriptionTermsView--contractTermPeriodInput-inner']`),
        ExpectedTerm: this.page.locator(`//input[@id='application-Subscriptions-list-component---subscriptionView--subscriptionTermsView--expectedTermPeriodInput-inner']`),
    };

    Buttons = {
        Create: this.Containers.BottomContainer.locator('"Create"'),
        Cancel: this.Containers.BottomContainer.locator('"Cancel"'),
    };

    async SetWithdrawalPeriod(days: string) {
        await this.Elements.WithdrawalPeriod.fill(days);
    }

    async SetTermOfNotice(days: string) {
        await this.Elements.TermOfNotice.fill(days);
    }

    async SetMinimumTerm(months: string) {
        await this.Elements.MinimumTerm.fill(months);
    }

    async FillMandatoryFields(period:number, days:number, months:number) {
        await this.Elements.WithdrawalPeriod.fill(period.toString());
        await this.Elements.TermOfNotice.fill(days.toString());
        await this.Elements.MinimumTerm.fill(months.toString());
    }

    async GetSubscriptionNumber() {
        let number = await this.Elements.SubscriptionNumber.innerText();
        return number;
    }
}