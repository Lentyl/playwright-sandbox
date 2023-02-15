import BasePage from '../BasePage'
import * as testData from "../../data/testData.json"
import { Page } from "@playwright/test";


export default class WebTablesPage {

    readonly page: Page;
    readonly commonSpace: BasePage

    constructor(page: Page) {
        this.page = page
        this.commonSpace = new BasePage(this.page);
    }

    email: string = ''

    //locators
    web_table_tab = () => this.page.locator('//li[child::span[contains(text(),"Web Tables")]]');
    add_new_user_button = () => this.page.locator('button#addNewRecordButton');
    search_record_input = () => this.page.locator('input#searchBox');
    table_records = () => this.page.locator('//div[@class="rt-tr-group"][1]//div[@class="rt-td"]');
    edit_record_icon_button = () => this.page.locator('span#edit-record-1');
    delete_record_icon_button = () => this.page.locator('span#delete-record-3');

    //Registration Form
    close_x_button = () => this.page.locator('button.close > span[aria-hidden]');
    first_name_input = () => this.page.locator('input#firstName');
    last_name_input = () => this.page.locator('input#lastName');
    email_input = () => this.page.locator('input#userEmail');
    age_input = () => this.page.locator('input#age');
    salary_input = () => this.page.locator('input#salary');
    department_input = () => this.page.locator('input#department');
    submit_button = () => this.page.locator('button#submit');

    // switch table page
    table_page_input = () => this.page.locator('input[aria-label="jump to page"]');
    total_pages_quantity = () => this.page.locator('span.-totalPages');
    previous_table_page_button = () => this.page.locator('div.-previous > button');
    next_table_page_button = () => this.page.locator('div.-next > button');
    table_row_select = () => this.page.locator('[aria-label="rows per page"]');

    async addUser(userQuantity: number = 0) {
        for (let i = 0; i <= userQuantity; i++) {
            await this.add_new_user_button().click();
            await this.first_name_input().fill(testData.first_names[(await this.commonSpace.randomNumber(0, testData.first_names.length - 1))]);
            await this.last_name_input().fill(testData.last_names[(await this.commonSpace.randomNumber(0, testData.last_names.length - 1))])
            await this.email_input().fill(`mar${new Date().getTime()}@gmail.com`);
            await this.age_input().fill(await this.commonSpace.randomNumber(18, 70) + "");
            await this.salary_input().fill(await this.commonSpace.randomNumber(2000, 6000) + "");
            await this.department_input().fill(testData.department[await this.commonSpace.randomNumber(0, testData.department.length - 1)]);
            await this.submit_button().click();
        }
        await this.add_new_user_button().click();
        await this.close_x_button().click();
    }

    async editFirstRecordInTable() {
        this.email = `mar${new Date().getTime()}@wp.pl`;
        await this.edit_record_icon_button().click();
        await this.first_name_input().fill('Rafał');
        await this.last_name_input().fill('Kowalski');
        await this.email_input().fill(this.email);
        await this.age_input().fill(55 + "");
        await this.salary_input().fill(3576 + "");
        await this.department_input().fill('Production');
        await this.submit_button().click();
    }
}