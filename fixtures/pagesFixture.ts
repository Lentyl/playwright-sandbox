import { test as pageTest, chromium } from "@playwright/test";
import TextBoxPage from "../pages/elements/TextBoxPage";
import BrokenImgeLinkPage from "../pages/elements/BrokenImgeLinkPage";
import ButtonsPage from "../pages/elements/ButtonsPage";
import CheckBoxPage from "../pages/elements/CheckBoxPage";
import DynamicPropertiesPage from "../pages/elements/DynamicPropertiesPage";
import LinksPage from "../pages/elements/LinksPage";
import RadioButtonPage from "../pages/elements/RadioButtonPage";
import WebTablesPage from "../pages/elements/WebTablesPage";
import UploadAndDownloadPage from "../pages/elements/UploadAndDownloadPage";
import FormPage from "../pages/form/FormPage";
import BrowserWindowsPage from "../pages/alerts-frame-windows/BrowserWindowsPage";
import AlertsPage from '../pages/alerts-frame-windows/AlertsPage'
import FramesPage from '../pages/alerts-frame-windows/FramesPage'
import ModalDialogPage from "../pages/alerts-frame-windows/ModalDialogPage";
import NestedFramesPage from "../pages/alerts-frame-windows/NestedFramesPage";

type pages = {
    textBoxPage: TextBoxPage;
    brokenImgeLinkPage: BrokenImgeLinkPage;
    buttonsPage: ButtonsPage;
    checkBoxPage: CheckBoxPage;
    dynamicPropertiesPage: DynamicPropertiesPage;
    linksPage: LinksPage;
    radioButtonPage: RadioButtonPage;
    webTablesPage: WebTablesPage;
    uploadAndDownloadPage: UploadAndDownloadPage;
    formPage: FormPage;
    browserWindowsPage: BrowserWindowsPage;
    alertsPage: AlertsPage;
    framesPage: FramesPage;
    modalDialogPage: ModalDialogPage;
    nestedFramesPage: NestedFramesPage;
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
    dynamicPropertiesPage: async ({ page }, use) => {
        await use(new DynamicPropertiesPage(page))
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
    },
    formPage: async ({ page }, use) => {
        await use(new FormPage(page))
    },
    browserWindowsPage: async ({ page }, use) => {
        await use(new BrowserWindowsPage(page))
    },
    alertsPage: async ({ page }, use) => {
        await use(new AlertsPage(page))
    },
    framesPage: async ({ page }, use) => {
        await use(new FramesPage(page))
    },
    modalDialogPage: async ({ page }, use) => {
        await use(new ModalDialogPage(page))
    },
    nestedFramesPage: async ({ page }, use) => {
        await use(new NestedFramesPage(page))
    },
})



export const test = testPages;
