import BasePage from '../BasePage'
import { Page } from "@playwright/test";

export default class BrokenImgeLinkPage {

    readonly page: Page;
    readonly commonSpace: BasePage

    constructor(page: Page) {
        this.page = page
        this.commonSpace = new BasePage(this.page);
    }

    //locators
    broken_link_image_tab = () => this.page.locator('//li[child::span[text()="Broken Links - Images"]]');
    all_images = () => this.page.locator('img');
    valid_link = () => this.page.getByText('Click Here for Valid Link');
    broken_link = () => this.page.getByText('Click Here for Broken Link');

    async isBrokenImage(): Promise<boolean> {

        let brokenImage: boolean = false;
        for (const el of await this.all_images().all()) {
            let box = await el.boundingBox();
            if (box?.width === 16 || box?.height === 16) {
                brokenImage = true
                console.log(await el.evaluate(elem => elem.outerHTML), ' - this is broken img'); // left for better item localization
            }
        };
        return brokenImage
    }
}