import BasePage from '../BasePage'
import { Page } from "@playwright/test";

export default class ToolTipsPage extends BasePage {

  constructor(page: Page) {
    super(page);
  }

  //locators
  tool_tip_tab = this.page.locator('//li[child::span[text()="Tool Tips"]]');
  header = this.page.locator('div#buttonToolTopContainer > p');
  button = this.page.locator('button#toolTipButton');
  button_message = this.page.locator('div#buttonToolTip div.tooltip-inner');
  input = this.page.locator('input#toolTipTextField');
  input_message = this.page.locator('div#textFieldToolTip div.tooltip-inner ');
  text_link = this.page.locator('a[href="javascript:void(0)"]');
  contrary_message = this.page.locator('div#contraryTexToolTip div.tooltip-inner ');
  section_message = this.page.locator('div#sectionToolTip div.tooltip-inner ');
}