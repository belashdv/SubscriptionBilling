import { BaseApplicationPage } from "./BaseApplicationPage";

export class Homepage extends BaseApplicationPage {
    constructor(page) {
        super(page);
    }

    Containers = {
        HeaderContainer: this.page.locator('[class="sapUshellShellHeader sapContrastPlus"]'),
        TitleContainer: this.page.locator('[class="sapUshellAnchorNavigationBar sapMPageHeader sapMIBar-CTX sapMHeader-CTX sapContrastPlus"]'),
    };

    // Pages = {
        
    // };

    Buttons = {
        Back: this.Containers.HeaderContainer.locator(`//*[contains(@aria-label,"Back")]`),
        SAP: this.Containers.HeaderContainer.locator('a.sapUshellShellIco'),
        NavMenu: this.Containers.HeaderContainer.locator("#shellAppTitle-button"),
        Search: this.Containers.HeaderContainer.locator("#sf"),
        Support: this.Containers.HeaderContainer.locator(`//*[contains(@aria-label,"Built-In Support")]`),
        Feedback: this.Containers.HeaderContainer.locator(`//*[contains(@aria-label,"Give Feedback")]`),
        OpenHelp: this.Containers.HeaderContainer.locator(`//*[contains(@aria-label,"Open Help")]`),
        OpenProfile: this.Containers.HeaderContainer.locator("#userActionsMenuHeaderButton"),
    };

    async ChooseNecessaryPage(name: string) {
        await this.page.locator(`//*[contains(@aria-label,'${name}')]`).click();
    }
}