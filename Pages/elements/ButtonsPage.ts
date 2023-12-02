import BasePage from '../BasePage'
import { Page } from "@playwright/test";

export default class BrokenImgeLinkPage extends BasePage {

  constructor(page: Page) {
    super(page);
  }

  //locators
  buttons_tab = this.page.locator('//li[child::span[contains(text(),"Buttons")]]');

  //buttons
  double_click_button = this.page.locator('button#doubleClickBtn');
  right_click_button = this.page.locator('button#rightClickBtn');
  click_me_button = this.page.locator('//button[text()="Click Me"]');

  //messages 
  double_click_text = this.page.locator('p#doubleClickMessage');
  right_click_text = this.page.locator('p#rightClickMessage');
  dynamic_click_me_text = this.page.locator('p#dynamicClickMessage');
}