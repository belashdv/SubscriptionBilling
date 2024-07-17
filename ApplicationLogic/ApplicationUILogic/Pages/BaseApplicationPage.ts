import { BasePage } from "../../BasePage";

export class BaseApplicationPage extends BasePage {
    constructor(page) {
        super(page)
    }; 

    MainContainers = {
        ContainerContent: this.page.locator('[class="sapUshellTileContainerContent"]'), 
        ContainerItem: this.page.locator('[class="sapUshellDashboardGroupsContainerItem"]'), 
    }
}