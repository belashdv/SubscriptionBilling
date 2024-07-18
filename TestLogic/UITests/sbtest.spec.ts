import {expect} from '@playwright/test'; 
import {test} from '../BaseTest'
import Log from '../../Data/Utils/Logger'
import { PageName, Customer, Products } from '../../Data/Enums/Data.enum.ts';


test.describe('Subscription Billing test', () => {
   
    test('Creating a Subscription Billing', async ({pageManager}) => {
        Log.step('1. Click "Manage Subscription" page.');
        await pageManager.homepage.ChooseNecessaryPage(PageName.ManageSubscriptions);

        Log.step('2. Press Create button.');
        await pageManager.manageSubscriptions.Buttons.Create.click();

        Log.step('3. Choose any Customer.');
        await pageManager.manageSubscriptions.ChooseCustomer(Customer.anyCustomer);

        Log.step('4. Choose and save Market.');
        //when we choose customer market is choosing automatically
        await pageManager.page.waitForTimeout(1500); //because SB is slow
        let marketName = await pageManager.manageSubscriptions.GetMarketName();
        Log.infoStep(`Market name is: ${marketName}`);
        
        Log.step('5. Choose any product');
        await pageManager.manageSubscriptions.ChooseProduct(Products.anyProduct);

        Log.step('6. Choose term in months.');
        await pageManager.manageSubscriptions.ChooseFixedTerm("48");

        Log.step('7. Press "Continue" button.');
        await pageManager.manageSubscriptions.CreateSubscriptionElementsButtons.Continue.click();

        Log.step('8. Fill mandatory fields');
        await pageManager.subscription.FillMandatoryFields(14, 7, 12);

        Log.step('9. Click "Create" button');
        await pageManager.subscription.Buttons.Create.click();

        Log.step('10. Save Subscription ID');
        await expect(pageManager.subscription.Elements.SubscriptionNumber).toBeVisible();
        let SubscriptionID = await pageManager.subscription.GetSubscriptionNumber();
        Log.infoStep(`Subscription ID is: ${SubscriptionID}`);

        Log.step('11. Go back to Homepage');
        await pageManager.homepage.Buttons.SAP.click();

        Log.step('12. Click "Manage Billing Data" page.');
        await pageManager.homepage.ChooseNecessaryPage(PageName.ManageBillingData);

        Log.step('13. Enter Subscription ID into field');
        await pageManager.page.waitForTimeout(1500); //because playwright is too fast
        await pageManager.manageBillingData.fillSubscriptionID(SubscriptionID);
        
        Log.step('14. Enter market into field');
        //market field filled automatically

        Log.step('15. Press Go button');
        await pageManager.manageBillingData.Buttons.Go.click();

        Log.step('16. Subscription is found by ID');
        expect(pageManager.manageBillingData.TableELements.Line).toBeVisible();

        //await pageManager.page.pause();
    });
});