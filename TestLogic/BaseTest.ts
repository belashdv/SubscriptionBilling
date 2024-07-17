import { test as base, Page } from '@playwright/test';
import { PageManager } from '../ApplicationLogic/ApplicationUILogic/Pages/PageManager';
import { Credentials, Url } from '../Data/Enums/Data.enum';

export type TestOptions = {
    domain: string
}

export const test = base.extend<TestOptions & {pageManager: PageManager}> ({
    domain: ['', {option: true}], 

    page: async ({page}, use) => {
        await page.goto(Url.SBUrl);
        await new PageManager(page).loginPage.LogIn(Credentials.login, Credentials.password);
        await use(page);
    },

    pageManager: async ({page}, use) => {
        const pageManager = new PageManager(page); 
        await use(pageManager); 
    }, 
}); 