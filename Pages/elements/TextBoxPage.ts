import BasePage from '../BasePage'
import * as testData from "../../data/testData.json"
import { Page } from "@playwright/test";


export default class TextBoxPage {

    readonly page: Page;
    readonly commonSpace: BasePage

    constructor(page: Page) {
        this.page = page
        this.commonSpace = new BasePage(this.page);
    }

    //Locators
    text_box_tab = () => this.page.locator('//li[child::span[contains(text(),"Text Box")]]');
    submit_button = () => this.page.locator('button#submit');
    permanent_address_input = () => this.page.locator('textarea#permanentAddress');
    current_address_input = () => this.page.locator('textarea#currentAddress');
    full_name_input = () => this.page.locator('input#userName');
    email_input = () => this.page.locator('input#userEmail');
    name_text_element = () => this.page.locator('p#name');
    email_text_element = () => this.page.locator('p#email');
    currentAddress_text_element = () => this.page.locator('p#currentAddress');
    permanent_address_text_element = () => this.page.locator('p#permanentAddress');

    async fillFormAndSubmit() {
        await this.full_name_input().fill(testData.first_names[0]);
        await this.email_input().fill(testData.email);
        await this.current_address_input().fill(testData.current_address);
        await this.permanent_address_input().fill(testData.permanent_address);
        await this.submit_button().click();
    }
}