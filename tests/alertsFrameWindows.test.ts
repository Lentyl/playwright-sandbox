import { expect } from "@playwright/test"
import { test } from "../fixtures/pagesFixture"

test.describe('Alerts frames and windows tests', () => {

    test("Alerts frame windows - Browser windows test", async ({ page, browserWindowsPage }) => {
        await page.goto("/", { waitUntil: "load" });
        await browserWindowsPage.commonSpace.goToTab(browserWindowsPage.commonSpace.alerts_frames_windows_card(), browserWindowsPage.browser_windows_tab());
        const newTab = await browserWindowsPage.commonSpace.getNewTab(browserWindowsPage.new_tab_button())
        await expect((newTab).locator('h1#sampleHeading')).toHaveText('This is a sample page');
        await newTab.close();
        const newWindow = await browserWindowsPage.commonSpace.getNewTab(browserWindowsPage.new_window_button());
        await expect((newWindow).locator('h1#sampleHeading')).toHaveText('This is a sample page');
        await newWindow.close();
        const newWindowMessage = await browserWindowsPage.commonSpace.getNewTab(browserWindowsPage.new_window_message_button());
        await expect((newWindowMessage).locator('body')).toHaveText('Knowledge increases by sharing but not by saving. Please share this website with your friends and in your organization.');
        await newWindowMessage.close();
    })

    test("Alerts frame windows - Alert test", async ({ page, alertsPage }) => {
        await page.goto("/");
        await alertsPage.commonSpace.goToTab(alertsPage.commonSpace.alerts_frames_windows_card(), alertsPage.alerts_tab());
        page.on('dialog', async dialog => {
            expect(dialog.type()).toContain('alert');
            expect(dialog.message()).toContain('You clicked a button');
            await dialog.accept();
        });
        await alertsPage.basic_alert_button().click();
    })

    test("Alerts frame windows - Five second alert ", async ({ page, alertsPage }) => {
        await page.goto("/");
        await alertsPage.commonSpace.goToTab(alertsPage.commonSpace.alerts_frames_windows_card(), alertsPage.alerts_tab());
        page.on('dialog', async dialog => {
            expect(dialog.type()).toContain('alert');
            expect(dialog.message()).toContain('This alert appeared after 5 seconds');
            await dialog.accept();
        });
        await alertsPage.five_second_alert_button().click();
        await page.waitForEvent('dialog');

    })

    test("Alerts frame windows - confirm alert test ", async ({ page, alertsPage }) => {
        await page.goto("/");
        await alertsPage.commonSpace.goToTab(alertsPage.commonSpace.alerts_frames_windows_card(), alertsPage.alerts_tab());
        page.on('dialog', async dialog => {
            expect(dialog.type()).toContain('confirm');
            expect(dialog.message()).toContain('Do you confirm action?');
            await dialog.accept();
        });
        await alertsPage.confirm_alert_button().click();
        expect(alertsPage.confirmation_message()).toHaveText('You selected Ok');
    })

    test("Alerts frame windows - promp box test ", async ({ page, alertsPage }) => {
        await page.goto("/");
        await alertsPage.commonSpace.goToTab(alertsPage.commonSpace.alerts_frames_windows_card(), alertsPage.alerts_tab());
        page.on('dialog', async dialog => {
            expect(dialog.type()).toContain('prompt');
            expect(dialog.message()).toContain('Please enter your name');
            await dialog.accept('Mariusz');
        });
        await alertsPage.prompt_button().click();
        expect(alertsPage.prompt_message()).toHaveText('You entered Mariusz');
    })

    test("Alerts frame windows - frames test ", async ({ page, framesPage }) => {
        await page.goto("/");
        await framesPage.commonSpace.goToTab(framesPage.commonSpace.alerts_frames_windows_card(), framesPage.frames_tab());
        expect(framesPage.first_frame().locator(framesPage.frame_text())).toHaveText('This is a sample page');
        expect(framesPage.second_frame().locator(framesPage.frame_text())).toHaveText('This is a sample page');
    })

    test("Alerts frame windows - nested frames test ", async ({ page, nestedFramesPage }) => {
        await page.goto("/");
        await nestedFramesPage.commonSpace.goToTab(nestedFramesPage.commonSpace.alerts_frames_windows_card(), nestedFramesPage.nested_frames_tab());
        await expect(nestedFramesPage.parent_frame_text()).toHaveText('Parent frame');
        await expect(nestedFramesPage.childe_frame_text()).toHaveText('Child Iframe');
    })

    test("Alerts frame windows - modal dialog test", async ({ page, modalDialogPage }) => {
        await page.goto("/");
        await modalDialogPage.commonSpace.goToTab(modalDialogPage.commonSpace.alerts_frames_windows_card(), modalDialogPage.modal_dialogs_tab());
        await modalDialogPage.small_modal_button().click();
        await expect(modalDialogPage.small_modal_header()).toHaveText('Small Modal');
        await expect(modalDialogPage.small_modal_text()).toHaveText('This is a small modal. It has very less content');
        await modalDialogPage.small_modal_close_button().click();
        await modalDialogPage.large_modal_button().click();
        await expect(modalDialogPage.large_modal_header()).toHaveText('Large Modal');
        await expect(modalDialogPage.large_modal_text()).toContainText('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the');
        await modalDialogPage.large_modal_close_button().click();
    })
})