import BasePage from '../BasePage'
import { Locator, Page } from "@playwright/test";

export default class DroppablePage extends BasePage {

  constructor(page: Page) {
    super(page);
  }

  //locators
  droppable_tab = this.page.locator('//li[child::span[text()="Droppable"]]');
  accept_nav_tab = this.page.locator('a#droppableExample-tab-accept');
  acceptable_box = this.page.locator('div#acceptable');
  acceptable_dropp_box_text = this.page.locator('div#acceptDropContainer p');
  prevent_propogation_nav_tab = this.page.locator('a#droppableExample-tab-preventPropogation');
  revert_draggable_nav_tab = this.page.locator('a#droppableExample-tab-revertable');
  drag_me_box = this.page.locator('div#draggable');
  prevent_prpagation_drag_me_box = this.page.locator('div#dragBox');
  prevent_prpagation_drappeble_outer_text = this.page.locator('div#notGreedyDropBox > p');
  prevent_prpagation_drappeble_inner_text = this.page.locator('div#notGreedyInnerDropBox > p');
  prevent_prpagation_second_box_drappeble_outer_text = this.page.locator('div#greedyDropBox > p');
  prevent_prpagation__second_box_drappeble_inner_text = this.page.locator('div#greedyDropBoxInner > p')
  droppeble_box_text = this.page.locator('div#simpleDropContainer  p');
  revert_draggable_dropp_box = this.page.locator('div#revertableDropContainer div#droppable');
  revert_box = this.page.locator('div#revertable');
  not_revert_box = this.page.locator('div#notRevertable');

  async isInTheBox(element: Locator): Promise<boolean> {
    let inTheBox = false
    const elementBox = await element.boundingBox();
    const box = await this.revert_draggable_dropp_box.boundingBox();

    if (elementBox === null || box === null) {
      throw new Error('thumbBoundingBox and sliderBoundingBox is passible null');
    }

    if (elementBox.x > box.x && elementBox.y > box.y && elementBox.x + elementBox.width < box.x + box.width && elementBox.y + elementBox.height < box.y + box.height) {
      inTheBox = true;
    }
    return inTheBox
  }
}