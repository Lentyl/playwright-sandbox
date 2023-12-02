import BasePage from '../BasePage'
import { Page } from "@playwright/test";

export default class ProgressBarPage extends BasePage {

  constructor(page: Page) {
    super(page);
  }

  //locators
  progress_bar_tab = this.page.locator('//li[child::span[text()="Progress Bar"]]');
  start_stop_button = this.page.locator('button#startStopButton');
  reset_button = this.page.locator('button#resetButton');
  progress_bar = this.page.locator('div#progressBar > div[aria-valuenow="100"]');
}