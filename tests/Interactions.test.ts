import { expect } from "@playwright/test"
import { test } from "../fixtures/pagesFixture"

test("Interactions - sortable test", async ({ page, sortablePage }) => {
    await page.goto("/");
    await sortablePage.commonSpace.goToTab(sortablePage.commonSpace.interactions_card(), sortablePage.sortable_tab());
    await sortablePage.sortRectangleElements();
    await expect(sortablePage.tile_list().nth(0)).toHaveText('Six');
    await expect(sortablePage.tile_list().nth(1)).toHaveText('Five');
    await expect(sortablePage.tile_list().nth(2)).toHaveText('Four');
    await expect(sortablePage.tile_list().nth(3)).toHaveText('Three');
    await expect(sortablePage.tile_list().nth(4)).toHaveText('Two');
    await expect(sortablePage.tile_list().nth(5)).toHaveText('One');
    await sortablePage.sortSquareElements();
    await expect(sortablePage.square_tile_list().nth(0)).toHaveText('Nine');
    await expect(sortablePage.square_tile_list().nth(1)).toHaveText('Eight');
    await expect(sortablePage.square_tile_list().nth(2)).toHaveText('Seven');
    await expect(sortablePage.square_tile_list().nth(3)).toHaveText('Six');
    await expect(sortablePage.square_tile_list().nth(4)).toHaveText('Five');
    await expect(sortablePage.square_tile_list().nth(5)).toHaveText('Four');
    await expect(sortablePage.square_tile_list().nth(6)).toHaveText('Three');
    await expect(sortablePage.square_tile_list().nth(7)).toHaveText('Two');
    await expect(sortablePage.square_tile_list().nth(8)).toHaveText('One');
})

test("Interactions - selectable test", async ({ page, selectablePage }) => {
    await page.goto("/");
    await selectablePage.commonSpace.goToTab(selectablePage.commonSpace.interactions_card(), selectablePage.selectable_tab());
    await selectablePage.selectRectangleElements();
    await expect(selectablePage.tile_list().nth(0)).toHaveCSS('background-color', 'rgb(0, 123, 255)');
    await expect(selectablePage.tile_list().nth(1)).toHaveCSS('background-color', 'rgb(0, 123, 255)');
    await expect(selectablePage.tile_list().nth(2)).toHaveCSS('background-color', 'rgb(0, 123, 255)');
    await expect(selectablePage.tile_list().nth(3)).toHaveCSS('background-color', 'rgb(0, 123, 255)');
    await selectablePage.selectSquareElements();
    await expect(selectablePage.square_tile_list().nth(0)).toHaveCSS('background-color', 'rgb(0, 123, 255)');
    await expect(selectablePage.square_tile_list().nth(1)).toHaveCSS('background-color', 'rgb(0, 123, 255)');
    await expect(selectablePage.square_tile_list().nth(2)).toHaveCSS('background-color', 'rgb(0, 123, 255)');
    await expect(selectablePage.square_tile_list().nth(3)).toHaveCSS('background-color', 'rgb(0, 123, 255)');
    await expect(selectablePage.square_tile_list().nth(4)).toHaveCSS('background-color', 'rgb(0, 123, 255)');
    await expect(selectablePage.square_tile_list().nth(5)).toHaveCSS('background-color', 'rgb(0, 123, 255)');
    await expect(selectablePage.square_tile_list().nth(6)).toHaveCSS('background-color', 'rgb(0, 123, 255)');
    await expect(selectablePage.square_tile_list().nth(7)).toHaveCSS('background-color', 'rgb(0, 123, 255)');
    await expect(selectablePage.square_tile_list().nth(8)).toHaveCSS('background-color', 'rgb(0, 123, 255)');
})

test.only("Interactions - resizable test", async ({ page, resizablePage }) => {
    await page.goto("/");
    await resizablePage.commonSpace.goToTab(resizablePage.commonSpace.interactions_card(), resizablePage.resizable_tab());
    await page.pause();
})

test("Interactions - droppable test", async ({ page, droppablePage }) => {
    await page.goto("/");
    await droppablePage.commonSpace.goToTab(droppablePage.commonSpace.interactions_card(), droppablePage.droppable_tab());
    await page.pause();
})

test("Interactions - dragabble test", async ({ page, dragablePage }) => {
    await page.goto("/");
    await dragablePage.commonSpace.goToTab(dragablePage.commonSpace.interactions_card(), dragablePage.dragabble_tab());

})