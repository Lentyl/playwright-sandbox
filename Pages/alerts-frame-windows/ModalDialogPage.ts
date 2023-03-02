import BasePage from '../BasePage'
import { Page } from "@playwright/test";

export default class ModalDialogPage {

    readonly page: Page;
    readonly commonSpace: BasePage

    constructor(page: Page) {
        this.page = page
        this.commonSpace = new BasePage(this.page);
    }

    //locators
    browser_windows_tab = () => this.page.locator('//li[child::span[text()="Browser Windows"]]');
    new_tab_button = () => this.page.locator('button#tabButton');
    new_tab_window_heading = () => this.page.locator('h1#sampleHeading');
    new_window_button = () => this.page.locator('button#windowButton');
    new_window_message_button = () => this.page.locator('button#messageWindowButton');
}