import BasePage from '../BasePage'
import { Page } from "@playwright/test";

export default class AlertsPage {

    readonly page: Page;
    readonly commonSpace: BasePage

    constructor(page: Page) {
        this.page = page
        this.commonSpace = new BasePage(this.page);
    }

    //locators
    alerts_tab = () => this.page.locator('//li[child::span[text()="Alerts"]]');
    basic_alert_button = () => this.page.locator('button#alertButton');
    five_second_alert_button = () => this.page.locator('button#timerAlertButton');
    confirm_alert_button = () => this.page.locator('button#confirmButton');
    prompt_button = () => this.page.locator('button#promtButton');

    confirmation_message = () => this.page.locator('span#confirmResult');
    prompt_message = () => this.page.locator('span#promptResult');

}