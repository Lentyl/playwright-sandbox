import { expect } from "@playwright/test"
import { test } from "../fixtures/pagesFixture"

test("Alerts frame windows  - Browser windows test", async ({ page, browserWindowsPage }) => {
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

test("Alerts frame windows  - Alert test", async ({ page, alertsPage }) => {
    await page.goto("/");
    await alertsPage.commonSpace.goToTab(alertsPage.commonSpace.alerts_frames_windows_card(), alertsPage.alerts_tab());
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('You clicked a button');
        await dialog.accept();
    });
    await alertsPage.basic_alert_button().click();
})

test("Alerts frame windows  - Five second alert ", async ({ page, alertsPage }) => {
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

test("Alerts frame windows  - confirm alert test ", async ({ page, alertsPage }) => {
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

test("Alerts frame windows  - promp box test ", async ({ page, alertsPage }) => {
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