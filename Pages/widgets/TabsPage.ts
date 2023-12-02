import BasePage from '../BasePage'
import { Page } from "@playwright/test";

export default class TabsPage extends BasePage {

  constructor(page: Page) {
    super(page);
  }

  //locators
  tabs_tab = this.page.locator('//li[child::span[text()="Tabs"]]');
  page_header = this.page.locator('div#tabsContainer> div.mb-3');
  button = this.page.locator('button#toolTipButton');
  what_tab = this.page.locator('a#demo-tab-what');
  origin_tab = this.page.locator('a#demo-tab-origin');
  use_tab = this.page.locator('a#demo-tab-use');
  more_tab = this.page.locator('a#demo-tab-more');
  content = this.page.locator('p.mt-3');
}