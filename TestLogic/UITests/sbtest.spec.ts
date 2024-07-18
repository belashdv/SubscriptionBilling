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

        Log.step('10. Save Subscription number');
        await expect(pageManager.subscription.Elements.SubscriptionNumber).toBeVisible();
        let SubscriptionNumber = await pageManager.subscription.GetSubscriptionNumber();
        Log.infoStep(`Subscription number is: ${SubscriptionNumber}`);

        await pageManager.page.pause()
    });
});



/*
Зайти на сайт https://test-idp.eu10.revenue.cloud.sap/launchpad#Shell-home  ✔
anton.leonenko@clarity.cx', 'Greedis9good'  ✔
Нажать на Manage Subscriptions  ✔
Надать на кнопку Create ✔
Выбрать любого кастомера    ✔
Выбрать выбрать любой маркет    ✔
Сохранить название маркета  ✔
Выбрать любой продукт   ✔
Ввести любой срок действия  ✔
Нажать на кнопку Продолжить ✔
Заполнить все возможные поля ✔
Нажать на кнопку Create ✔
Сохранить номер созданной Subscription ✔
Вернуться на главное меню 
Нажать на manage billing data
Ввести номер subscription в поле Subscription ID
В поле Markets ввести маркет из степа 7
Нажать Go
Убедиться, что нужная подписка сохранена
*/