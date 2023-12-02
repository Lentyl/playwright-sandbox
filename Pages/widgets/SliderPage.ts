import BasePage from '../BasePage'
import { Page } from "@playwright/test";

export default class SliderPage extends BasePage {

  constructor(page: Page) {
    super(page);
  }

  //locators
  slider_tab = this.page.locator('//li[child::span[text()="Slider"]]');
  slider = this.page.locator('input.range-slider--primary');
  slider_meater = this.page.locator('input#sliderValue');

  async moveSlider(targetPercentage: number) {
    const sliderBoundingBox = await this.slider.boundingBox()
    if (sliderBoundingBox === null) {
      throw new Error('thumbBoundingBox and sliderBoundingBox is passible null');
    }
    await this.slider.click({
      position: {
        x: (sliderBoundingBox.width / 100) * targetPercentage,
        y: sliderBoundingBox.height / 2
      }
    })
  }
}