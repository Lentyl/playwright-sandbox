import BasePage from '../BasePage'
import { Page } from "@playwright/test";


export default class LinksPage {

    readonly page: Page;
    readonly commonSpace: BasePage

    constructor(page: Page) {
        this.page = page
        this.commonSpace = new BasePage(this.page);
    }

    //locators
    links_tab = () => this.page.locator('//li[child::span[text()="Links"]]');

    //links that open new tab
    home_link = () => this.page.locator('a#simpleLink');
    dynamic_home_link = () => this.page.locator('a#dynamicLink');

    //links will send an api call
    created_link = () => this.page.locator('a#created');
    no_content_link = () => this.page.locator('a#no-content');
    moved_link = () => this.page.locator('a#moved');
    bad_request_link = () => this.page.locator('a#bad-request');
    unauthorized_link = () => this.page.locator('a#unauthorized');
    forbidden_link = () => this.page.locator('a#forbidden');
    not_Found_link = () => this.page.locator('a#invalid-url');

    //text response locator
    request_response_text = () => this.page.locator('p#linkResponse');

}