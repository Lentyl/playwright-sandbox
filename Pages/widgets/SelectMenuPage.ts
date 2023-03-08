import BasePage from '../BasePage'
import { Page } from "@playwright/test";

export default class SelectMenuPage {

    readonly page: Page;
    readonly commonSpace: BasePage

    constructor(page: Page) {
        this.page = page
        this.commonSpace = new BasePage(this.page);
    }

    //locators
    select_menu_tab = () => this.page.locator('//li[child::span[text()="Select Menu"]]');

}