import BasePage from '../BasePage'
import { Page } from "@playwright/test";

export default class ToolTipsPage {

    readonly page: Page;
    readonly commonSpace: BasePage

    constructor(page: Page) {
        this.page = page
        this.commonSpace = new BasePage(this.page);
    }

    //locators
    tool_tip_tab = () => this.page.locator('//li[child::span[text()="Tool Tips"]]');
    header = () => this.page.locator('div#buttonToolTopContainer > p');
    button = () => this.page.locator('button#toolTipButton');
    input = () => this.page.locator('input#toolTipTextField');
    contrary_link = () => this.page.locator('//li[child::span[text()="Tool Tips"]]');
    section_link = () => this.page.locator('//li[child::span[text()="Tool Tips"]]');

}