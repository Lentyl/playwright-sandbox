import BasePage from '../BasePage'
import { Page } from "@playwright/test";

export default class SelectablePage {

    readonly page: Page;
    readonly commonSpace: BasePage

    constructor(page: Page) {
        this.page = page
        this.commonSpace = new BasePage(this.page);
    }

    //locators
    selectable_tab = () => this.page.locator('//li[child::span[text()="Selectable"]]');
    tile_list = () => this.page.locator('div#demo-tabpane-list li.list-group-item');
    square_tile_list = () => this.page.locator('div#gridContainer li.list-group-item');
    grid_tab = () => this.page.locator('a#demo-tab-grid');

    async selectRectangleElements() {
        await this.tile_list().nth(0).click();
        await this.tile_list().nth(1).click();
        await this.tile_list().nth(2).click();
        await this.tile_list().nth(3).click();
    }

    async selectSquareElements() {
        await this.grid_tab().click();
        await this.square_tile_list().nth(0).click();
        await this.square_tile_list().nth(1).click();
        await this.square_tile_list().nth(2).click();
        await this.square_tile_list().nth(3).click();
        await this.square_tile_list().nth(4).click();
        await this.square_tile_list().nth(5).click();
        await this.square_tile_list().nth(6).click();
        await this.square_tile_list().nth(7).click();
        await this.square_tile_list().nth(8).click();
    }

}