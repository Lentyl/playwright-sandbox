import BasePage from '../BasePage'
import { Page } from "@playwright/test";

export default class CheckBoxPage extends BasePage {

  constructor(page: Page) {
    super(page);
  }

  //Locatoes
  checkbox_tub = this.page.locator('//li[child::span[contains(text(),"Check Box")]]');
  home_expand_tree_arrow = this.page.getByRole('button', { name: 'Toggle' });
  desktop_expand_tree_arrow = this.page.getByRole('button', { name: 'Toggle' }).nth(1);
  documents_expand_tree_arrow = this.page.getByRole('button', { name: 'Toggle' }).nth(2);
  download_expand_tree_arrow = this.page.locator('//button[@title="Toggle" and ancestor::span[@class="rct-text" and descendant::span[contains(text(),"Download")]]]');
  work_space_expand_tree_arrow = this.page.locator('//button[@title="Toggle" and ancestor::span[@class="rct-text" and descendant::span[contains(text(),"WorkSpace")]]]');
  office_expand_tree_arrow = this.page.locator('//button[@title="Toggle" and ancestor::span[@class="rct-text" and descendant::span[contains(text(),"Office")]]]');

  //checkboxes
  home_checkbox = this.page.locator('//span[@class="rct-checkbox" and ancestor::span[@class="rct-text" and descendant::span[contains(text(),"Home")]]]');
  desktop_checkbox = this.page.locator('//span[@class="rct-checkbox" and ancestor::span[@class="rct-text" and descendant::span[contains(text(),"Desktop")]]]');
  documents_checkbox = this.page.locator('//span[@class="rct-checkbox" and ancestor::span[@class="rct-text" and descendant::span[contains(text(),"Documents")]]]');
  xpath_download_checkbox = this.page.locator('//span[@class="rct-checkbox" and ancestor::span[@class="rct-text" and descendant::span[contains(text(),"Download")]]]');
  work_space_checkbox = this.page.locator('//span[@class="rct-checkbox" and ancestor::span[@class="rct-text" and descendant::span[contains(text(),"WorkSpace")]]]');
  office_checkbox = this.page.locator('//span[@class="rct-checkbox" and ancestor::span[@class="rct-text" and descendant::span[contains(text(),"Office")]]]');
  all_checkboxes = this.page.locator('span.rct-checkbox > svg');
  selected_checkboxes_names = this.page.locator('span.text-success');

  async openTree() {
    await this.home_expand_tree_arrow.click();
    await this.desktop_expand_tree_arrow.click();
    await this.documents_expand_tree_arrow.click();
    await this.download_expand_tree_arrow.click();
    await this.work_space_expand_tree_arrow.click();
    await this.office_expand_tree_arrow.click();
  }

  async selectCheckboxes() {

    let i: number = 0
    for (const el of await this.all_checkboxes.all()) {
      if (i === 1) break;
      await el.check();
      i++
    }
  }

  async checkboxChecked(): Promise<boolean> {
    let areChecked: boolean = true;
    let i = 0
    for (const el of await this.all_checkboxes.all()) {

      let classValue = await el.getAttribute('class');
      if (classValue?.slice(-6) !== '-check')
        areChecked = false;
      i++
    }
    return areChecked;
  }
}