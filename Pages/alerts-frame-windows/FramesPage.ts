import BasePage from '../BasePage'
import { Page } from "@playwright/test";

export default class FramesPage {

    readonly page: Page;
    readonly commonSpace: BasePage

    constructor(page: Page) {
        this.page = page
        this.commonSpace = new BasePage(this.page);
    }

    //locators
    frames_tab = () => this.page.locator('//li[child::span[text()="Frames"]]');
    first_frame = () => this.page.frameLocator('iframe#frame1');
    second_frame = () => this.page.frameLocator('iframe#frame2');
    frame_text = () => 'h1#sampleHeading';
}