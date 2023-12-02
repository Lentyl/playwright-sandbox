import { Page, Locator } from "@playwright/test";
import * as fs from 'fs';


export default class BasePage {

  constructor(protected page: Page) { }


  elements_card = this.page.locator('div.card:nth-child(1)');
  forms_card = this.page.locator('div.card:nth-child(2)');
  alerts_frames_windows_card = this.page.locator('div.card:nth-child(3)');
  widgets_card = this.page.locator('div.card:nth-child(4)');
  interactions_card = this.page.locator('div.card:nth-child(5)');
  books_store_aplicaton_card = this.page.locator('div.card:nth-child(6)');


  static footer = 'footer';
  static container = 'div#fixedban'

  async goToTab(cardName: Locator, tabName?: Locator) {
    await cardName.click();
    await tabName?.click();
  }

  async randomNumber(min: number, max: number): Promise<number> {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  async isFileWasDownloaded(path: string): Promise<boolean> {
    let fileDownloaded: boolean = false
    if (fs.existsSync(path)) fileDownloaded = true
    return fileDownloaded
  }

  async deleteFile(path: string) {
    if (fs.existsSync(path)) {
      fs.unlinkSync('data/downloads/sampleFile.jpeg');
    }
  }

  async giveMarginToSubmitBtnAndScrollToBottom(submitButton: Locator) {
    await submitButton.evaluate(element => element.style.marginBottom = '200px');
    await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  }

  async getNewTab(link: Locator): Promise<Page> {
    const [newTabs] = await Promise.all([
      this.page.waitForEvent('popup'),
      link.click(),
    ])
    return newTabs
  }
} 