import { expect } from "@playwright/test"
import { test } from "../fixtures/pagesFixture"

test.describe('Interactions tests', () => {

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

    test("Interactions - resizable test", async ({ page, resizablePage }) => {
        await page.goto("/");
        await resizablePage.commonSpace.goToTab(resizablePage.commonSpace.interactions_card(), resizablePage.resizable_tab());
        await resizablePage.first_resizable_window().evaluate(el => {
            el.style.width = '500px';
            el.style.height = '300px';
        })
        await expect(resizablePage.first_resizable_window()).toHaveCSS('width', '500px');
        await expect(resizablePage.first_resizable_window()).toHaveCSS('height', '300px');
        await resizablePage.second_resizable_window().evaluate(el => {
            el.style.width = '700px';
            el.style.height = '400px';
        })
        await expect(resizablePage.second_resizable_window()).toHaveCSS('width', '700px');
        await expect(resizablePage.second_resizable_window()).toHaveCSS('height', '400px');
    })

    test("Interactions - droppable test", async ({ page, droppablePage }) => {
        await page.goto("/");
        await droppablePage.commonSpace.goToTab(droppablePage.commonSpace.interactions_card(), droppablePage.droppable_tab());
        await droppablePage.drag_me_box().dragTo(droppablePage.droppeble_box_text());
        expect(droppablePage.droppeble_box_text()).toHaveText('Dropped!');
        await droppablePage.accept_nav_tab().click();
        await droppablePage.acceptable_box().dragTo(droppablePage.acceptable_dropp_box_text());
        expect(droppablePage.acceptable_dropp_box_text()).toHaveText('Dropped!');
        await droppablePage.prevent_propogation_nav_tab().click();
        await droppablePage.prevent_prpagation_drag_me_box().dragTo(droppablePage.prevent_prpagation_drappeble_outer_text());
        expect(droppablePage.prevent_prpagation_drappeble_outer_text()).toHaveText('Dropped!');
        await droppablePage.prevent_prpagation_drag_me_box().dragTo(droppablePage.prevent_prpagation_drappeble_inner_text());
        expect(droppablePage.prevent_prpagation_drappeble_inner_text()).toHaveText('Dropped!');
        await droppablePage.prevent_prpagation_drag_me_box().dragTo(droppablePage.prevent_prpagation_second_box_drappeble_outer_text());
        expect(droppablePage.prevent_prpagation_second_box_drappeble_outer_text()).toHaveText('Dropped!');
        await droppablePage.prevent_prpagation_drag_me_box().dragTo(droppablePage.prevent_prpagation__second_box_drappeble_inner_text());
        expect(droppablePage.prevent_prpagation__second_box_drappeble_inner_text()).toHaveText('Dropped!');
        await droppablePage.revert_draggable_nav_tab().click();
        await droppablePage.revert_box().dragTo(droppablePage.revert_draggable_dropp_box());
        await page.waitForTimeout(500);
        expect(await droppablePage.isInTheBox(droppablePage.revert_box())).toBe(false);
        await droppablePage.not_revert_box().dragTo(droppablePage.revert_draggable_dropp_box());
        expect(await droppablePage.isInTheBox(droppablePage.not_revert_box())).toBe(true);
    })
})