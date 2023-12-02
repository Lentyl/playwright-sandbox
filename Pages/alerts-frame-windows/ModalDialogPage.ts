import BasePage from '../BasePage'
import { Page } from "@playwright/test";

export default class ModalDialogPage extends BasePage {

  constructor(page: Page) {
    super(page);
  }

  //locators
  modal_dialogs_tab = this.page.locator('//li[child::span[text()="Modal Dialogs"]]');
  small_modal_button = this.page.locator('button#showSmallModal');
  small_modal_header = this.page.locator('div#example-modal-sizes-title-sm');
  small_modal_text = this.page.locator('div.modal-body');
  small_modal_close_button = this.page.locator('button#closeSmallModal');

  large_modal_button = this.page.locator('button#showLargeModal');
  large_modal_header = this.page.locator('div#example-modal-sizes-title-lg');
  large_modal_text = this.page.locator('div.modal-body > p');
  large_modal_close_button = this.page.locator('button#closeLargeModal')
}