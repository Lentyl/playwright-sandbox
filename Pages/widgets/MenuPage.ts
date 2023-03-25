import BasePage from '../BasePage'
import { Page } from "@playwright/test";

export default class MenuPage {

    readonly page: Page;
    readonly commonSpace: BasePage

    constructor(page: Page) {
        this.page = page
        this.commonSpace = new BasePage(this.page);
    }

    //locators
    menu_tab = () => this.page.locator('//li[child::span[text()="Menu"]]');
    item1 = () => this.page.getByText('Main Item 1');
    item2 = () => this.page.getByText('Main Item 2');
    item3 = () => this.page.getByText('Main Item 3');
    nav_elements = () => this.page.locator('#nav li');
    sub_items = () => this.page.getByText('Sub Item');
    sub_sub_item1 = () => this.page.getByAltText('Sub Sub Item 1')
    sub_sub_item2 = () => this.page.getByAltText('Sub Sub Item 2')

}