import { expect } from "@playwright/test"
import { test } from "../fixtures/pagesFixture"

test("Elements - text box test", async ({ page, textBoxPage }) => {
    await page.goto("/");
    await textBoxPage.commonSpace.goToTab(textBoxPage.commonSpace.elements_card(), textBoxPage.text_box_tab());
    await textBoxPage.fillFormAndSubmit();
    await expect(textBoxPage.name_text_element()).toHaveText('Name:Mariusz');
    await expect(textBoxPage.email_text_element()).toHaveText('Email:many88@gmail.com');
    await expect(textBoxPage.currentAddress_text_element()).toHaveText('Current Address :Plonsk kopernika 7g/33');
    await expect(textBoxPage.permanent_address_text_element()).toHaveText('Permananet Address :Gdansk Roberta wielkiego');
})

test("Elements - check box test", async ({ page, checkBoxPage }) => {
    await page.goto("/");
    await checkBoxPage.commonSpace.goToTab(checkBoxPage.commonSpace.elements_card(), checkBoxPage.checkbox_tub());
    await checkBoxPage.openTree();
    await checkBoxPage.selectCheckboxes();
    expect(await checkBoxPage.checkboxChecked()).toBe(true);
    await expect(checkBoxPage.selected_checkboxes_names().nth(0)).toHaveText('home');
    await expect(checkBoxPage.selected_checkboxes_names().nth(1)).toHaveText('desktop');
    await expect(checkBoxPage.selected_checkboxes_names().nth(2)).toHaveText('notes');
    await expect(checkBoxPage.selected_checkboxes_names().nth(3)).toHaveText('commands');
    await expect(checkBoxPage.selected_checkboxes_names().nth(4)).toHaveText('documents');
    await expect(checkBoxPage.selected_checkboxes_names().nth(5)).toHaveText('workspace');
    await expect(checkBoxPage.selected_checkboxes_names().nth(6)).toHaveText('react');
    await expect(checkBoxPage.selected_checkboxes_names().nth(7)).toHaveText('angular');
    await expect(checkBoxPage.selected_checkboxes_names().nth(8)).toHaveText('veu');
    await expect(checkBoxPage.selected_checkboxes_names().nth(9)).toHaveText('office');
    await expect(checkBoxPage.selected_checkboxes_names().nth(10)).toHaveText('public');
    await expect(checkBoxPage.selected_checkboxes_names().nth(11)).toHaveText('private');
    await expect(checkBoxPage.selected_checkboxes_names().nth(12)).toHaveText('classified');
    await expect(checkBoxPage.selected_checkboxes_names().nth(13)).toHaveText('general');
    await expect(checkBoxPage.selected_checkboxes_names().nth(14)).toHaveText('downloads');
    await expect(checkBoxPage.selected_checkboxes_names().nth(15)).toHaveText('wordFile');
    await expect(checkBoxPage.selected_checkboxes_names().nth(16)).toHaveText('excelFile');
})

test("Elements - Radio button test", async ({ page, radioButtonPage }) => {
    await page.goto("/");
    await radioButtonPage.commonSpace.goToTab(radioButtonPage.commonSpace.elements_card(), radioButtonPage.radio_button_tab());
    await expect(radioButtonPage.do_you_like_header()).toHaveText("Do you like the site?");
    await radioButtonPage.yes_radio_button().click({ force: true });
    await expect(radioButtonPage.selected_text()).toHaveText('You have selected Yes');
    await radioButtonPage.impressive_radio_button().click({ force: true });
    await expect(radioButtonPage.selected_text()).toHaveText('You have selected Impressive');
    expect(await radioButtonPage.no_radio_button().isChecked()).toBeFalsy();
})

test("Elements - Web tables test", async ({ page, webTablesPage }) => {
    await page.goto("/");
    await webTablesPage.commonSpace.goToTab(webTablesPage.commonSpace.elements_card(), webTablesPage.web_table_tab());
    await webTablesPage.addUser(10);
    await webTablesPage.search_record_input().fill('Cierr');
    await expect(webTablesPage.table_records().nth(0)).toHaveText('Cierra');
    await expect(webTablesPage.table_records().nth(1)).toHaveText('Vega');
    await expect(webTablesPage.table_records().nth(2)).toHaveText('39');
    await expect(webTablesPage.table_records().nth(3)).toHaveText('cierra@example.com');
    await expect(webTablesPage.table_records().nth(4)).toHaveText('10000');
    await expect(webTablesPage.table_records().nth(5)).toHaveText('Insurance');
    await webTablesPage.search_record_input().clear();
    await webTablesPage.editFirstRecordInTable();
    await expect(webTablesPage.table_records().nth(0)).toHaveText('Rafał');
    await expect(webTablesPage.table_records().nth(1)).toHaveText('Kowalski');
    await expect(webTablesPage.table_records().nth(2)).toHaveText('55');
    await expect(webTablesPage.table_records().nth(3)).toHaveText(webTablesPage.email);
    await expect(webTablesPage.table_records().nth(4)).toHaveText('3576');
    await expect(webTablesPage.table_records().nth(5)).toHaveText('Production');
    await expect(webTablesPage.total_pages_quantity()).toHaveText('2');
    await expect(webTablesPage.previous_table_page_button()).toBeDisabled();
    await webTablesPage.table_page_input().fill("2");
    await webTablesPage.page.keyboard.press('Enter');
    await webTablesPage.previous_table_page_button().click();
    await expect(webTablesPage.table_page_input()).toHaveAttribute('value', '1');
    await expect(webTablesPage.previous_table_page_button()).toBeDisabled()
    await webTablesPage.table_row_select().selectOption('5');
    await expect(webTablesPage.total_pages_quantity()).toHaveText('3');
    await webTablesPage.next_table_page_button().click();
    await webTablesPage.next_table_page_button().click();
    await expect(webTablesPage.table_page_input()).toHaveAttribute('value', '3');
    await expect(webTablesPage.next_table_page_button()).toBeDisabled();
})

test("Elements - Buttons test", async ({ page, buttonsPage }) => {
    await page.goto("/");
    await buttonsPage.commonSpace.goToTab(buttonsPage.commonSpace.elements_card(), buttonsPage.buttons_tab());
    await buttonsPage.double_click_button().dblclick();
    await expect(buttonsPage.double_click_text()).toHaveText('You have done a double click');
    await buttonsPage.right_click_button().click({ button: 'right' });
    await expect(buttonsPage.right_click_text()).toHaveText('You have done a right click');
    await buttonsPage.click_me_button().click();
    await expect(buttonsPage.dynamic_click_me_text()).toHaveText('You have done a dynamic click');
})

test("Elements - Links test", async ({ page, linksPage }) => {
    await page.goto("/");
    await linksPage.commonSpace.goToTab(linksPage.commonSpace.elements_card(), linksPage.links_tab());
    await linksPage.created_link().click();
    await expect(linksPage.request_response_text()).toHaveText('Link has responded with staus 201 and status text Created');
    await linksPage.no_content_link().click();
    await expect(linksPage.request_response_text()).toHaveText('Link has responded with staus 204 and status text No Content');
    await linksPage.moved_link().click();
    await expect(linksPage.request_response_text()).toHaveText('Link has responded with staus 301 and status text Moved Permanently');
    await linksPage.bad_request_link().click();
    await expect(linksPage.request_response_text()).toHaveText('Link has responded with staus 400 and status text Bad Request');
    await linksPage.unauthorized_link().click();
    await expect(linksPage.request_response_text()).toHaveText('Link has responded with staus 401 and status text Unauthorized');
    await linksPage.forbidden_link().click();
    await expect(linksPage.request_response_text()).toHaveText('Link has responded with staus 403 and status text Forbidden');
    await linksPage.not_Found_link().click();
    await expect(linksPage.request_response_text()).toHaveText('Link has responded with staus 404 and status text Not Found');
    expect((await linksPage.commonSpace.getNewTab(linksPage.home_link())).url()).toContain('https://demoqa.com/');
})

test("Elements - Broken links, images test", async ({ page, brokenImgeLinkPage }) => {
    await page.goto("/");
    await brokenImgeLinkPage.commonSpace.goToTab(brokenImgeLinkPage.commonSpace.elements_card(), brokenImgeLinkPage.broken_link_image_tab());
    expect(await brokenImgeLinkPage.isBrokenImage(), "I declare I know there is broken image :-)").toBe(true);
    await brokenImgeLinkPage.broken_link().click();
    expect(page.url()).toContain('http://the-internet.herokuapp.com/status_codes/500');
})

test("Elements - upload and download test", async ({ page, uploadAndDownloadPage }) => {
    await page.goto("/");
    await uploadAndDownloadPage.commonSpace.goToTab(uploadAndDownloadPage.commonSpace.elements_card(), uploadAndDownloadPage.upload_and_download_tab());
    await uploadAndDownloadPage.downloadFile();
    expect(await uploadAndDownloadPage.commonSpace.isFileWasDownloaded('data/downloads/sampleFile.jpeg')).toBe(true);
    await uploadAndDownloadPage.uploadFile();
    await uploadAndDownloadPage.commonSpace.deleteFile('data/downloads/sampleFile.jpeg');
    await expect(uploadAndDownloadPage.upload_file_path_text()).toHaveText('C:\\fakepath\\sampleFile.jpeg');
})

test("Elements - dynamic properties test", async ({ page, dynamicPropertiesPage }) => {
    await page.goto("/");
    await dynamicPropertiesPage.commonSpace.goToTab(dynamicPropertiesPage.commonSpace.elements_card(), dynamicPropertiesPage.dynamic_Properties_tab());
    await expect(dynamicPropertiesPage.random_id_text()).toHaveText('This text has random Id');
    await expect(dynamicPropertiesPage.enable_after_five_sec_button()).toHaveText('Will enable 5 seconds');
    await expect(dynamicPropertiesPage.color_change_button()).toHaveText('Color Change');
    await expect(dynamicPropertiesPage.color_change_button()).toHaveCSS('color', 'rgb(220, 53, 69)');
    await expect(dynamicPropertiesPage.visible_after_five_sec_button()).toHaveText('Visible After 5 Seconds');
    await expect(dynamicPropertiesPage.visible_after_five_sec_button()).toBeVisible();
})
