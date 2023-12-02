import BasePage from '../BasePage'
import { Page } from "@playwright/test";

export default class FramesPage extends BasePage {

  constructor(page: Page) {
    super(page);
  }

  //locators
  frames_tab = this.page.locator('//li[child::span[text()="Frames"]]');
  first_frame = this.page.frameLocator('iframe#frame1');
  second_frame = this.page.frameLocator('iframe#frame2');
  frame_text = 'h1#sampleHeading';
}