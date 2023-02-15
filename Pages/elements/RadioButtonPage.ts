import BasePage from '../BasePage'
import { Page } from "@playwright/test";


export default class RadioButtonPage {

    readonly page: Page;
    readonly commonSpace: BasePage

    constructor(page: Page) {
        this.page = page
        this.commonSpace = new BasePage(this.page);
    }

    //Locators 
    radio_button_tab = () => this.page.locator('//li[child::span[contains(text(),"Radio Button")]]');
    do_you_like_header = () => this.page.locator('div.mb-3');
    yes_radio_button = () => this.page.locator('input#yesRadio');
    impressive_radio_button = () => this.page.locator('input#impressiveRadio');
    no_radio_button = () => this.page.locator('input#noRadio');
    selected_text = () => this.page.locator('p.mt-3');


}