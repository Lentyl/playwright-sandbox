import BasePage from '../BasePage'
import { Page } from "@playwright/test";


export default class DynamicPropertiesPage extends BasePage {

  constructor(page: Page) {
    super(page);
  }

  //Loators
  dynamic_Properties_tab = this.page.locator('//li[child::span[contains(text(),"Dynamic Properties")]]');
  random_id_text = this.page.locator('.col-12 p');
  enable_after_five_sec_button = this.page.locator('button#enableAfter');
  color_change_button = this.page.locator('button#colorChange.text-danger');
  visible_after_five_sec_button = this.page.locator('button#visibleAfter');
}