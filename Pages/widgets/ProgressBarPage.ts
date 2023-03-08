import BasePage from '../BasePage'
import { Page } from "@playwright/test";

export default class ProgressBarPage {

    readonly page: Page;
    readonly commonSpace: BasePage

    constructor(page: Page) {
        this.page = page
        this.commonSpace = new BasePage(this.page);
    }

    //locators
    progress_bar_tab = () => this.page.locator('//li[child::span[text()="Progress Bar"]]');

}