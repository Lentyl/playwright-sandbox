import BasePage from '../BasePage'
import { Page } from "@playwright/test";

export default class AccordianPage extends BasePage {

  constructor(page: Page) {
    super(page);
  }

  //locators
  accordian_tab = this.page.locator('//li[child::span[text()="Accordian"]]');
  first_section_text = this.page.locator('div#section1Content > p');
  second_section_tab = this.page.locator('div#section2Heading');
  second_section_text = this.page.locator('div#section2Content > p:nth-child(1)');
  third_section_tab = this.page.locator('div#section3Heading');
  third_section_text = this.page.locator('div#section3Content > p');
}