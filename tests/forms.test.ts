import { expect } from "@playwright/test"
import { test } from "../fixtures/pagesFixture"

test("Forms - Practice forms test", async ({ page, formPage }) => {
    await page.goto("/", { waitUntil: "load" });
    await formPage.commonSpace.goToTab(formPage.commonSpace.forms_card(), formPage.practice_form_tab());
    await formPage.fillAndConfirmForm();
    await expect(formPage.modal_confirmation_elements().nth(0)).toHaveText('Student Name');
    await expect(formPage.modal_confirmation_elements().nth(1)).toHaveText('Mariusz Podgorski');
    await expect(formPage.modal_confirmation_elements().nth(2)).toHaveText('Student Email');
    await expect(formPage.modal_confirmation_elements().nth(3)).toHaveText('many88@gmail.com');
    await expect(formPage.modal_confirmation_elements().nth(4)).toHaveText('Gender');
    await expect(formPage.modal_confirmation_elements().nth(5)).toHaveText('Male');
    await expect(formPage.modal_confirmation_elements().nth(6)).toHaveText('Mobile');
    await expect(formPage.modal_confirmation_elements().nth(7)).toHaveText('6627485737');
    await expect(formPage.modal_confirmation_elements().nth(8)).toHaveText('Date of Birth');
    await expect(formPage.modal_confirmation_elements().nth(9)).toHaveText('04 January,1988');
    await expect(formPage.modal_confirmation_elements().nth(10)).toHaveText('Subjects');
    await expect(formPage.modal_confirmation_elements().nth(11)).toHaveText('English');
    await expect(formPage.modal_confirmation_elements().nth(12)).toHaveText('Hobbies');
    await expect(formPage.modal_confirmation_elements().nth(13)).toHaveText('Sports');
    await expect(formPage.modal_confirmation_elements().nth(14)).toHaveText('Picture');
    await expect(formPage.modal_confirmation_elements().nth(15)).toHaveText('example.jpg');
    await expect(formPage.modal_confirmation_elements().nth(16)).toHaveText('Address');
    await expect(formPage.modal_confirmation_elements().nth(17)).toHaveText('Plonsk kopernika 7g/33');
    await expect(formPage.modal_confirmation_elements().nth(18)).toHaveText('State and City');
    await expect(formPage.modal_confirmation_elements().nth(19)).toHaveText('NCR Delhi');
    await formPage.commonSpace.giveMarginToSubmitBtnAndScrollToBottom(formPage.modal_window_button());
})