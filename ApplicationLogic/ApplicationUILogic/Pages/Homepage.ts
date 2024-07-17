import { BaseApplicationPage } from "./BaseApplicationPage";

export class Homepage extends BaseApplicationPage {
    constructor(page) {
        super(page);
    }

    Pages = {
        HeaderTile: this.MainContainers.ContainerContent.locator('[class="sapMGT"]'),
        OtherTile: this.MainContainers.ContainerItem.locator('[class="sapMGT"]'),
    }

    async ChooseNecessaryPage(name: string) {
        await this.page.locator(`//*[contains(@aria-label,'${name}')]`).click();
    }
}