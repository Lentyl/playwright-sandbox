import BasePage from '../BasePage'
import { Page } from "@playwright/test";


export default class DyamicPropertiesPage {

    readonly page: Page;
    readonly commonSpace: BasePage

    constructor(page: Page) {
        this.page = page
        this.commonSpace = new BasePage(this.page);
    }


}