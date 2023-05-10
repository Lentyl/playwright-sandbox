import BasePage from '../BasePage'
import * as testData from "../../data/testData.json"
import { Page } from "@playwright/test";

export default class FormPage {

    readonly page: Page;
    readonly commonSpace: BasePage

    constructor(page: Page) {
        this.page = page
        this.commonSpace = new BasePage(this.page);
    }

    //locators
    practice_form_tab = () => this.page.locator('//li[child::span[contains(text(),"Practice Form")]]');

    //form elements
    first_name_input = () => this.page.locator('input#firstName');
    last_name_input = () => this.page.locator('input#lastName');
    email_input = () => this.page.locator('input#userEmail');
    gender_male_radio_button = () => this.page.locator('input#gender-radio-1');
    mobile_input = () => this.page.locator('input#userNumber');
    date_input = () => this.page.locator('input#dateOfBirthInput');
    date_year_select = () => this.page.locator('select.react-datepicker__year-select');
    date_month_select = () => this.page.locator('select.react-datepicker__month-select');
    date_day = () => this.page.locator('div[aria-label="Choose Monday, January 4th, 1988"]');
    subject_autocomplete_input = () => this.page.locator('input#subjectsInput');
    subject_option = () => this.page.locator('div#react-select-2-option-0');
    hobbies_sports_radio_button = () => this.page.locator('input#hobbies-checkbox-1');
    upload_picture_button = () => 'input#uploadPicture'
    current_address_textarea = () => this.page.locator('textarea#currentAddress');
    state_select = () => this.page.locator('div#state > div');
    state_option = () => this.page.locator('div#react-select-3-option-0');
    city_select = () => this.page.locator('div#city > div');
    city_option = () => this.page.locator('div#react-select-4-option-0');
    submit_button = () => this.page.locator('button#submit');

    //confirmation modal window elements
    modal_confirmation_elements = () => this.page.locator('td');
    modal_window_button = () => this.page.locator('button#closeLargeModal');

    async fillAndConfirmForm() {
        await this.first_name_input().fill(testData.first_names[0]);
        await this.last_name_input().fill(testData.last_names[0]);
        await this.email_input().fill(testData.email);
        await this.gender_male_radio_button().check({ force: true });
        await this.mobile_input().fill(testData.telephone_number);
        await this.date_input().fill(testData.birth_date);
        await this.date_year_select().selectOption(testData.year);
        await this.date_month_select().selectOption(testData.month);
        await this.date_day().click();
        await this.subject_autocomplete_input().fill(testData.subject);
        await this.subject_option().click();
        await this.hobbies_sports_radio_button().check({ force: true });
        await this.page.setInputFiles(this.upload_picture_button(), ['data/images/example.jpg']);
        await this.current_address_textarea().fill(testData.current_address);
        await this.commonSpace.giveMarginToSubmitBtnAndScrollToBottom(this.submit_button());
        await this.state_select().click();
        await this.state_option().click();
        await this.city_select().click();
        await this.city_option().click();
        await this.submit_button().click();
    }
}