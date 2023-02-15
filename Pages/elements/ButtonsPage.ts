import BasePage from '../BasePage'
import { Page, Locator } from "@playwright/test";

export default class BrokenImgeLinkPage {

    readonly page: Page;
    readonly commonSpace: BasePage

    constructor(page: Page) {
        this.page = page
        this.commonSpace = new BasePage(this.page);
    }

    //locators
    buttons_tab = () => this.page.locator('//li[child::span[contains(text(),"Buttons")]]');

    //buttons
    double_click_button = () => this.page.locator('button#doubleClickBtn');
    right_click_button = () => this.page.locator('button#rightClickBtn');
    click_me_button = () => this.page.locator('//button[text()="Click Me"]');

    //messages 
    double_click_text = () => this.page.locator('p#doubleClickMessage');
    right_click_text = () => this.page.locator('p#rightClickMessage');
    dynamic_click_me_text = () => this.page.locator('p#dynamicClickMessage');


}