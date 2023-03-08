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

test.only("widgets - auto complete test", async ({ page, autoCompletePage }) => {
    await page.goto("/");
    await autoCompletePage.commonSpace.goToTab(autoCompletePage.commonSpace.widgets_card(), autoCompletePage.auto_complete_tab());
    await autoCompletePage.multiple_color_input().fill('bl');
    await page.pause();
    //await autoCompletePage.single_color_input().fill('blue');
}) 