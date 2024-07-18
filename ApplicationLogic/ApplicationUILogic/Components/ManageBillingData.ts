import { BaseApplicationPage } from "../Pages/BaseApplicationPage";
import { Subscription } from "./Subscription";

export class ManageBillingData extends BaseApplicationPage {
    constructor(page) {
        super(page);
    };

    Containers = {
        HeadContainer: this.page.locator('[class="sapFDynamicPageHeaderWrapper"]'), 
        MainContainer: this.page.locator('[class="sapFDynamicPageContent"]'),
    };

    Elements = {
        //Customer: this.Containers.HeadContainer.locator('[id="__input64-inner"]'),
        SubscriptionID: this.Containers.HeadContainer.locator('//input[contains(@id,"subscriptionNumberInput-inner")]'),
    };

    Buttons = {
        Go: this.Containers.HeadContainer.locator('"Go"'),
        AdaptFilter: this.Containers.HeadContainer.locator('"Adapt Filter"'),
        Create: this.Containers.MainContainer.locator('"Create"'),
    };

    TableELements = {
        Line: this.Containers.MainContainer.locator(`[class="sapMLIB sapMLIB-CTX sapMLIBShowSeparator sapMLIBTypeNavigation sapMLIBActionable sapMLIBHoverable sapMLIBFocusable sapMListTblRow"]`),
    }



    async fillSubscriptionID(subID: string) {
        await this.Elements.SubscriptionID.fill(subID);
    };

}