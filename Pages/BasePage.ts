import { Page, Locator } from "@playwright/test";


export default class BasePage {

    readonly page: Page;

    elements_card = () => this.page.locator('div.card:nth-child(1)');
    forms_card = () => 'div.card:nth-child(2)';
    alerts_frames_windows_card = () => 'div.card:nth-child(3)';
    widgets_card = () => 'div.card:nth-child(4)';
    interactions_card = () => 'div.card:nth-child(5)';
    books_store_aplicaton_card = () => 'div.card:nth-child(6)';

    constructor(page: Page) {
        this.page = page;
    }

    static footer = 'footer';
    static container = 'div#fixedban'

    async goToTab(cardName: Locator, tabName?: Locator) {
        await cardName.click();
        await tabName?.click();
    }

    async randomNumber(min: number, max: number): Promise<number> {
        return await Math.floor(Math.random() * (max - min)) + min;
    }

} 