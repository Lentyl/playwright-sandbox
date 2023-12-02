import BasePage from '../BasePage'
import { Page } from "@playwright/test";

export default class AlertsPage extends BasePage {

  constructor(page: Page) {
    super(page);
  }

  //locators
  alerts_tab = this.page.locator('//li[child::span[text()="Alerts"]]');
  basic_alert_button = this.page.locator('button#alertButton');
  five_second_alert_button = this.page.locator('button#timerAlertButton');
  confirm_alert_button = this.page.locator('button#confirmButton');
  prompt_button = this.page.locator('button#promtButton');

  confirmation_message = this.page.locator('span#confirmResult');
  prompt_message = this.page.locator('span#promptResult');

}