import { expect } from "@playwright/test"
import { test } from "../fixtures/pagesFixture"


test("widgets - accordian test", async ({ page, accordianPage }) => {
    await page.goto("/");
    await accordianPage.commonSpace.goToTab(accordianPage.commonSpace.widgets_card(), accordianPage.accordian_tab());
    await expect(accordianPage.first_section_text()).toContainText('Lorem Ipsum is simply dummy text of the printing and typesetting industry.');
    await accordianPage.second_section_tab().click();
    await expect(accordianPage.second_section_text()).toContainText('Contrary to popular belief, Lorem Ipsum is not simply random text.');
    await accordianPage.third_section_tab().click();
    await expect(accordianPage.third_section_text()).toContainText('It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.');
})

test("widgets - auto complete test", async ({ page, autoCompletePage }) => {
    await page.goto("/");
    await autoCompletePage.commonSpace.goToTab(autoCompletePage.commonSpace.widgets_card(), autoCompletePage.auto_complete_tab());
    await autoCompletePage.multiple_color_input().fill('bl');
    await autoCompletePage.multiple_blue_color_name().click();
    await autoCompletePage.multiple_color_input().fill('b');
    await autoCompletePage.multiple_black_color_name().click();
    await expect(autoCompletePage.multiple_slected_colors_list().nth(0)).toHaveText('Blue');
    await expect(autoCompletePage.multiple_slected_colors_list().nth(1)).toHaveText('Black');
    await autoCompletePage.single_color_input().fill('Vo');
    await autoCompletePage.single_voilet_color_name().click();
    await expect(autoCompletePage.single_selected_color_name()).toHaveText('Voilet');

})

test("widgets - date picker test", async ({ page, datePickerPage }) => {
    await page.goto("/");
    await datePickerPage.commonSpace.goToTab(datePickerPage.commonSpace.widgets_card(), datePickerPage.date_picker_tab());
    await datePickerPage.selectDate('2024', 'January', '4');
    await datePickerPage.selectDataAndTime('2025', 'April', '5', '20:00');
    expect((await datePickerPage.date_picker_input().inputValue()).includes('01/04/2024')).toBeTruthy();
    expect((await datePickerPage.date_and_time_input().inputValue()).includes('April 5, 2025 8:00 PM')).toBeTruthy();
})

test("widgets - slider test", async ({ page, sliderPage }) => {
    await page.goto("/");
    await sliderPage.commonSpace.goToTab(sliderPage.commonSpace.widgets_card(), sliderPage.slider_tab());
    await sliderPage.moveSlider(60);
    expect((await sliderPage.slider_meater().inputValue()).includes('60')).toBeTruthy();
})

test("widgets - progress bar test", async ({ page, progressBarPage }) => {
    await page.goto("/");
    await progressBarPage.commonSpace.goToTab(progressBarPage.commonSpace.widgets_card(), progressBarPage.progress_bar_tab());
    await progressBarPage.start_stop_button().click();
    await expect(progressBarPage.progress_bar()).toHaveText('100%');
    await expect(progressBarPage.progress_bar()).toHaveCSS('background-color', 'rgb(40, 167, 69)');
    await expect(progressBarPage.reset_button()).toHaveText('Reset');
})

test.only("widgets - tabs test", async ({ page, tabsPage }) => {
    await page.goto("/");
    await tabsPage.commonSpace.goToTab(tabsPage.commonSpace.widgets_card(), tabsPage.tabs_tab());
    expect(tabsPage.content().nth(0)).toContainText('Lorem Ipsum is simply dummy text of the printing and typesetting industry.');
    await tabsPage.origin_tab().click();
    expect(tabsPage.content().nth(1)).toContainText('Contrary to popular belief, Lorem Ipsum is not simply random text.');
    await tabsPage.use_tab().click();
    expect(tabsPage.content().nth(2)).toContainText('It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.');
    expect(tabsPage.more_tab()).toBeDisabled();
})

test.only("widgets - tool tip test", async ({ page, tabsPage }) => {
    await page.goto("/");
    await tabsPage.commonSpace.goToTab(tabsPage.commonSpace.widgets_card(), tabsPage.tabs_tab());

}) 