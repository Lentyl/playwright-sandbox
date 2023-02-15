import { test as pageTest, chromium } from "@playwright/test";
import TextBoxPage from "../Pages/elements/TextBoxPage";
import BrokenImgeLinkPage from "../Pages/elements/BrokenImgeLinkPage";
import ButtonsPage from "../Pages/elements/ButtonsPage";
import CheckBoxPage from "../Pages/elements/CheckBoxPage";
import DyamicPropertiesPage from "../Pages/elements/DyamicPropertiesPage";
import LinksPage from "../Pages/elements/LinksPage";
import RadioButtonPage from "../Pages/elements/RadioButtonPage"
import WebTablesPage from "../Pages/elements/WebTablesPage"
import UploadAndDownloadPage from "../Pages/elements/UploadAndDownloadPage"

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
