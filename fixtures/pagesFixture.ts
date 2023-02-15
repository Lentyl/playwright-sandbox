import { test as pageTest, chromium } from "@playwright/test";
import TextBoxPage from "../pages/elements/TextBoxPage";
import BrokenImgeLinkPage from "../pages/elements/BrokenImgeLinkPage";
import ButtonsPage from "../pages/elements/ButtonsPage";
import CheckBoxPage from "../pages/elements/CheckBoxPage";
import DyamicPropertiesPage from "../pages/elements/DyamicPropertiesPage";
import LinksPage from "../pages/elements/LinksPage";
import RadioButtonPage from "../pages/elements/RadioButtonPage"
import WebTablesPage from "../pages/elements/WebTablesPage"
import UploadAndDownloadPage from "../pages/elements/UploadAndDownloadPage"

type pages = {
    textBoxPage: TextBoxPage;
    brokenImgeLinkPage: BrokenImgeLinkPage;
    buttonsPage: ButtonsPage;
    checkBoxPage: CheckBoxPage;
    dyamicPropertiesPage: DyamicPropertiesPage;
    linksPage: LinksPage;
    radioButtonPage: RadioButtonPage;
    webTablesPage: WebTablesPage;
    uploadAndDownloadPage: UploadAndDownloadPage;
}

const testPages = pageTest.extend<pages>({

    textBoxPage: async ({ page }, use) => {
        await use(new TextBoxPage(page))
    },
    brokenImgeLinkPage: async ({ page }, use) => {
        await use(new BrokenImgeLinkPage(page))
    },
    buttonsPage: async ({ page }, use) => {
        await use(new ButtonsPage(page))
    },
    checkBoxPage: async ({ page }, use) => {
        await use(new CheckBoxPage(page))
    },
    dyamicPropertiesPage: async ({ page }, use) => {
        await use(new DyamicPropertiesPage(page))
    },
    linksPage: async ({ page }, use) => {
        await use(new LinksPage(page))
    },
    radioButtonPage: async ({ page }, use) => {
        await use(new RadioButtonPage(page))
    },
    webTablesPage: async ({ page }, use) => {
        await use(new WebTablesPage(page))
    },
    uploadAndDownloadPage: async ({ page }, use) => {
        await use(new UploadAndDownloadPage(page))
    }
})



export const test = testPages;
