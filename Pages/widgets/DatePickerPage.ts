import BasePage from '../BasePage'
import { Page } from "@playwright/test";

export default class DatePickerPage {

    readonly page: Page;
    readonly commonSpace: BasePage

    constructor(page: Page) {
        this.page = page
        this.commonSpace = new BasePage(this.page);
    }

    //locators
    date_picker_tab = () => this.page.locator('//li[child::span[text()="Date Picker"]]');
    date_picker_input = () => this.page.locator('input#datePickerMonthYearInput');
    date_and_time_input = () => this.page.locator('input#dateAndTimePickerInput');
    date_year_combobox = () => this.page.locator('select.react-datepicker__year-select');
    date_and_time_yare_combobox = () => this.page.locator('span.react-datepicker__year-read-view--selected-year');
    date_and_time_yare_option = () => this.page.locator('div.react-datepicker__year-option');
    date_month_combobox = () => this.page.locator('select.react-datepicker__month-select');
    date_and_time_month_combobox = () => this.page.locator('span.react-datepicker__month-read-view--selected-month');
    date_and_time_month_option = () => this.page.locator('div.react-datepicker__month-option');
    date_days = () => this.page.locator('div.react-datepicker__day');
    date_time = () => this.page.locator('li.react-datepicker__time-list-item');



    /*     await page.getByRole('combobox').nth(1).selectOption('2024');
        await page.getByRole('combobox').first().selectOption('0');
        await page.getByRole('option', { name: 'Choose Thursday, January 4th, 2024' }).click();
        await page.locator('#dateAndTimePickerInput').click();
        await page.getByText('20:00').click();
        await page.locator('#dateAndTimePickerInput').click();
        await page.locator('#dateAndTimePicker span').nth(2).click();
        await page.getByText('2024').click();
        await page.locator('#dateAndTimePicker span').first().click();
        await page.getByText('January').click();
        await page.getByRole('option', { name: 'Choose Thursday, January 4th, 2024' }).click();
        await page.getByText('20:00').click(); */


    async selectDate(year: string, month: string, day: string) {
        await this.date_picker_input().click();
        await this.date_year_combobox().selectOption(year);
        await this.date_month_combobox().selectOption(month);
        await this.date_days().getByText(day).nth(0).click();
    }

    async selectDataAndTime(year: string, month: string, day: string, time: string) {
        await this.date_and_time_input().click();
        await this.date_and_time_yare_combobox().click();
        await this.date_and_time_yare_option().getByText(year).click();
        await this.date_and_time_month_combobox().click();
        await this.date_and_time_month_option().getByText(month).click();
        await this.date_days().getByText(day).nth(0).click();
        await this.date_time().getByText(time).click();
    }
}