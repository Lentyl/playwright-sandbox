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
    multiple_blue_color_name = () => this.page.locator('#react-select-2-option-0');
    multiple_black_color_name = () => this.page.locator('#react-select-2-option-1');
    multiple_slected_colors_list = () => this.page.locator('div.css-1rhbuit-multiValue');
    single_color_input = () => this.page.locator('div#autoCompleteSingleContainer input');
    single_voilet_color_name = () => this.page.locator('#react-select-3-option-0');
    single_selected_color_name = () => this.page.locator('div.auto-complete__single-value');
}