import BasePage from '../BasePage'
import { Page } from "@playwright/test";

export default class AutoCompletePage {

    readonly page: Page;
    readonly commonSpace: BasePage

    constructor(page: Page) {
        this.page = page
        this.commonSpace = new BasePage(this.page);
    }

    //locators
    auto_complete_tab = () => this.page.locator('//li[child::span[text()="Auto Complete"]]');
    multiple_color_input = () => this.page.locator('div#autoCompleteMultipleContainer input');
    single_color_input = () => this.page.locator('div#autoCompleteSingleContainer input');

}