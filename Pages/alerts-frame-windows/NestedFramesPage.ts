import BasePage from '../BasePage'
import { Page } from "@playwright/test";

export default class NestedFramesPage {

    readonly page: Page;
    readonly commonSpace: BasePage

    constructor(page: Page) {
        this.page = page
        this.commonSpace = new BasePage(this.page);
    }

    //locators
    browser_windows_tab = () => this.page.locator('//li[child::span[text()="Browser Windows"]]');

}