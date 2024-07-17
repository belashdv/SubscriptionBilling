import { BaseApplicationPage } from "../Pages/BaseApplicationPage";

export class ManageSubscriptions extends BaseApplicationPage {
    constructor(page) {
        super(page);
    };

    Containers = {
        HeadContainer: this.page.locator('[class="sapFDynamicPageHeaderWrapper"]'), 
        MainContainer: this.page.locator('[class="sapFDynamicPageContent"]'),
        PopUpContainer: this.page.locator(`//*[contains(@data-sap-ui-popup,'id-1721218923579-192')]`)
    };

    Elements = {
        Customer: this.Containers.HeadContainer.locator('[id="__input5-inner"]'),
    };

    Buttons = {
        Go: this.Containers.HeadContainer.locator('"Go"'),
        AdaptFilter: this.Containers.HeadContainer.locator('"Adapt Filter"'),
        Create: this.Containers.MainContainer.locator('"Create"'),
    };

    CreateSubscriptionElements = {
        Customer: this.page.locator('[id="__input6-inner"]'),
        Market: this.page.locator('[id="application-Subscriptions-list-component---subscriptionListView--createSubscriptionView--marketComboBox-inner"]'),
        InitialFixedTerm: this.page.locator('//input[@id="application-Subscriptions-list-component---subscriptionListView--createSubscriptionView--fixedTermInput-inner"]'),
        
    };

    CreateSubscriptionElementsButtons = {
        Product: this.page.locator('//span[@aria-label="Show Value Help" and @id="application-Subscriptions-list-component---subscriptionListView--createSubscriptionView--productInput-vhi"]'),
        Continue: this.Containers.PopUpContainer.locator('"Continue"'),
    };

    Products = {
        CloudServer: this.page.locator('"Cloud Server"'),
    }

    async ChooseCustomer(customer: string) {
        await this.CreateSubscriptionElements.Customer.fill(customer);
        await this.CreateSubscriptionElements.Customer.press('Tab');
    };

    async GetMarketName() {
        let market = await this.CreateSubscriptionElements.Market.inputValue();
        return market;
    }

    async ChooseProduct(product: string) {
        await this.CreateSubscriptionElementsButtons.Product.click();
        await this.page.locator(`"${product}"`).first().click();
    }

    async ChooseFixedTerm(months: string) {
        await this.CreateSubscriptionElements.InitialFixedTerm.fill(months);
    }
}