import BasePage from '../BasePage'
import { Page } from "@playwright/test";

export default class SortablePage {

    readonly page: Page;
    readonly commonSpace: BasePage

    constructor(page: Page) {
        this.page = page
        this.commonSpace = new BasePage(this.page);
    }

    //locators
    sortable_tab = () => this.page.locator('//li[child::span[text()="Sortable"]]');
    tile_list = () => this.page.locator('div#demo-tabpane-list div.list-group-item');
    square_tile_list = () => this.page.locator('div#demo-tabpane-grid div.list-group-item');
    grid_tab = () => this.page.locator('a#demo-tab-grid');

    async sortRectangleElements() {
        await this.tile_list().nth(5).dragTo(this.tile_list().nth(0));
        await this.tile_list().nth(5).dragTo(this.tile_list().nth(1));
        await this.tile_list().nth(5).dragTo(this.tile_list().nth(2));
        await this.tile_list().nth(5).dragTo(this.tile_list().nth(3));
        await this.tile_list().nth(5).dragTo(this.tile_list().nth(4));
    }

    async sortSquareElements() {
        await this.grid_tab().click();
        await this.square_tile_list().nth(8).dragTo(this.square_tile_list().nth(0));
        await this.square_tile_list().nth(8).dragTo(this.square_tile_list().nth(1));
        await this.square_tile_list().nth(8).dragTo(this.square_tile_list().nth(2));
        await this.square_tile_list().nth(8).dragTo(this.square_tile_list().nth(3));
        await this.square_tile_list().nth(8).dragTo(this.square_tile_list().nth(4));
        await this.square_tile_list().nth(8).dragTo(this.square_tile_list().nth(5));
        await this.square_tile_list().nth(8).dragTo(this.square_tile_list().nth(6));
        await this.square_tile_list().nth(8).dragTo(this.square_tile_list().nth(7));
    }
}