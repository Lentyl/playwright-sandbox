import BasePage from '../BasePage'
import { Page } from "@playwright/test";

export default class BrokenImgeLinkPage {

    readonly page: Page;
    readonly commonSpace: BasePage

    constructor(page: Page) {
        this.page = page
        this.commonSpace = new BasePage(this.page);
    }

    broken_link_image_tab = () => this.page.locator('//li[child::span[text()="Broken Links - Images"]]');
    images = () => this.page.locator('img');
    links = () => this.page.locator('a');


    async getBrokenImage() {
        for (const el of await this.images().all()) {
            const minLength = await el.getAttribute('minlength') // css 
            console.log(minLength, ' !!!!!!!!!!!!!!');
        };
    }

}