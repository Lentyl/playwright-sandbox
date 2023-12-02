import BasePage from '../BasePage'
import { Page } from "@playwright/test";

export default class ResizablePage extends BasePage {

  constructor(page: Page) {
    super(page);
  }

  //locators
  resizable_tab = this.page.locator('//li[child::span[text()="Resizable"]]');
  first_resizable_window = this.page.locator('div#resizableBoxWithRestriction');
  second_resizable_window = this.page.locator('div#resizable');
}