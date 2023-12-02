import BasePage from '../BasePage'
import { Page, } from "@playwright/test";


export default class UploadAndDownloadPage extends BasePage {

  constructor(page: Page) {
    super(page);
  }

  //Locators
  upload_and_download_tab = this.page.locator('//li[child::span[contains(text(),"Upload and Download")]]');
  download_button = this.page.locator('a#downloadButton');
  upload_button = this.page.locator('input#uploadFile');
  upload_file_path_text = this.page.locator('p#uploadedFilePath');

  async downloadFile() {
    const [download] = await Promise.all([
      this.page.waitForEvent('download'),
      this.download_button.click(),
    ])
    await download.saveAs('data/downloads/sampleFile.jpeg');
  }

  async uploadFile() {
    await this.page.setInputFiles('input#uploadFile', ['data/downloads/sampleFile.jpeg']);
  }
}