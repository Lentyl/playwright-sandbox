import BasePage from '../BasePage'
import { Page } from "@playwright/test";

export default class DragablePage extends BasePage {

  constructor(page: Page) {
    super(page);
  }

  //locators
  dragabble_tab = this.page.locator('//li[child::span[text()="Dragabble"]]');
}