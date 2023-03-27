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
    select_value_combobox = () => this.page.locator('div#withOptGroup');
    select_value_option = () => this.page.getByText('A root option')
    selected_values = () => this.page.locator('div.css-1uccc91-singleValue')
    select_one_combobox = () => this.page.locator('div#selectOne');
    select_one_option = () => this.page.getByText('Mr.');
    old_style_combobox = () => this.page.locator('select#oldSelectMenu');
    multiselect_combobox = () => this.page.locator('//input[@id="react-select-4-input"]/ancestor::div[@class=" css-2b097c-container"]');
    multiselect_blue_option = () => this.page.getByText('Blue').nth(1);
    multiselect_red_option = () => this.page.getByText('Red').nth(1);
    multiselected_values = () => this.page.locator('div.css-12jo7m5');
    standard_multiselect_combobox = () => this.page.locator('select#cars');

}