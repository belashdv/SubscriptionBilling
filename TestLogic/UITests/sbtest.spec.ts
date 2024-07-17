import {expect} from '@playwright/test'; 
import {test} from '../BaseTest'
import Log from '../../Data/Utils/Logger'
import { PageName } from '../../Data/Enums/Data.enum';


test.describe('Subscription Billing test', () => {
   
    test('Creating a Subscription Billing', async ({pageManager}) => {
        Log.step('1. CLick "Manage Subscription" page.');
        await pageManager.homepage.ChooseNecessaryPage(PageName.ManageSubscriptions);

        Log.step('2. Press Create button.');
        
    });
});



/*
Зайти на сайт https://test-idp.eu10.revenue.cloud.sap/launchpad#Shell-home
anton.leonenko@clarity.cx', 'Greedis9good'
Нажать на Manage Subscriptions
Надать на кнопку Create
Выбрать любого кастомера
Выбрать выбрать любой маркет
Сохранить название маркета
Выбрать любой продукт
Ввести любой срок действия
Нажать на кнопку Продолжить
Заполнить все возможные поля 
Нажать на кнопку Create
Сохранить номер созданной Subscription
Вернуться на главное меню 
Нажать на manage billing data
Ввести номер subscription в поле Subscription ID
В поле Markets ввести маркет из степа 7
Нажать Go
Убедиться, что нужная подписка сохранена
*/