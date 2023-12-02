import BasePage from '../BasePage'
import { Page } from "@playwright/test";

export default class NestedFramesPage extends BasePage {

  constructor(page: Page) {
    super(page);
  }

  //locators
  nested_frames_tab = this.page.locator('//li[child::span[text()="Nested Frames"]]');
  parent_frame = this.page.frameLocator('iframe#frame1');
  childe_frame = this.parent_frame.frameLocator('iframe[srcdoc]');
  parent_frame_text = this.parent_frame.locator('body');
  childe_frame_text = this.childe_frame.locator('body>p');
}