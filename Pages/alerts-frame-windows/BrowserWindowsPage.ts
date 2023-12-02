import BasePage from '../BasePage'
import { Page } from "@playwright/test";

export default class BrowserWindowsPage extends BasePage {

  constructor(page: Page) {
    super(page);
  }

  //locators
  browser_windows_tab = this.page.locator('//li[child::span[text()="Browser Windows"]]');
  new_tab_button = this.page.locator('button#tabButton');
  new_tab_window_heading = this.page.locator('h1#sampleHeading');
  new_window_button = this.page.locator('button#windowButton');
  new_window_message_button = this.page.locator('button#messageWindowButton');
}