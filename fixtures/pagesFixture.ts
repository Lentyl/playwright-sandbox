import { test as pageTest } from "@playwright/test";
import TextBoxPage from "../Pages/elements/TextBoxPage"; 
import BrokenImgeLinkPage from "../Pages/elements/BrokenImgeLinkPage";
import ButtonsPage from "../Pages/elements/ButtonsPage";
import CheckBoxPage from "../Pages/elements/CheckBoxPage";
import DynamicPropertiesPage from "../Pages/elements/DynamicPropertiesPage";
import LinksPage from "../Pages/elements/LinksPage";
import RadioButtonPage from "../Pages/elements/RadioButtonPage";
import WebTablesPage from "../Pages/elements/WebTablesPage";
import UploadAndDownloadPage from "../Pages/elements/UploadAndDownloadPage";
import FormPage from "../Pages/form/FormPage";
import BrowserWindowsPage from "../Pages/alerts-frame-windows/BrowserWindowsPage";
import AlertsPage from '../Pages/alerts-frame-windows/AlertsPage'
import FramesPage from '../Pages/alerts-frame-windows/FramesPage'
import ModalDialogPage from "../Pages/alerts-frame-windows/ModalDialogPage";
import NestedFramesPage from "../Pages/alerts-frame-windows/NestedFramesPage";
import AccordianPage from "../Pages/widgets/AccordianPage";
import AutoCompletePage from "../Pages/widgets/AutoCompletePage";
import DatePickerPage from "../Pages/widgets/DatePickerPage";
import MenuPage from "../Pages/widgets/MenuPage";
import ProgressBarPage from "../Pages/widgets/ProgressBarPage";
import SelectMenuPage from "../Pages/widgets/SelectMenuPage";
import SliderPage from "../Pages/widgets/SliderPage";
import TabsPage from "../Pages/widgets/TabsPage";
import ToolTipsPage from "../Pages/widgets/ToolTipsPage";
import DragablePage from "../Pages/interactions/DragablePage";
import DroppablePage from "../Pages/interactions/DroppablePage";
import ResizablePage from "../Pages/interactions/ResizablePage";
import SelectablePage from "../Pages/interactions/SelectablePage";
import SortablePage from "../Pages/interactions/SortablePage";


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
    accordianPage: AccordianPage;
    autoCompletePage: AutoCompletePage;
    datePickerPage: DatePickerPage;
    menuPage: MenuPage;
    progressBarPage: ProgressBarPage;
    selectMenuPage: SelectMenuPage;
    sliderPage: SliderPage;
    tabsPage: TabsPage;
    toolTipsPage: ToolTipsPage;
    dragablePage: DragablePage;
    droppablePage: DroppablePage;
    resizablePage: ResizablePage;
    selectablePage: SelectablePage;
    sortablePage: SortablePage;
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
    accordianPage: async ({ page }, use) => {
        await use(new AccordianPage(page))
    },
    autoCompletePage: async ({ page }, use) => {
        await use(new AutoCompletePage(page))
    },
    datePickerPage: async ({ page }, use) => {
        await use(new DatePickerPage(page))
    },
    menuPage: async ({ page }, use) => {
        await use(new MenuPage(page))
    },
    progressBarPage: async ({ page }, use) => {
        await use(new ProgressBarPage(page))
    },
    selectMenuPage: async ({ page }, use) => {
        await use(new SelectMenuPage(page))
    },
    sliderPage: async ({ page }, use) => {
        await use(new SliderPage(page))
    },
    tabsPage: async ({ page }, use) => {
        await use(new TabsPage(page))
    },
    toolTipsPage: async ({ page }, use) => {
        await use(new ToolTipsPage(page))
    },
    dragablePage: async ({ page }, use) => {
        await use(new DragablePage(page))
    },
    droppablePage: async ({ page }, use) => {
        await use(new DroppablePage(page))
    },
    resizablePage: async ({ page }, use) => {
        await use(new ResizablePage(page))
    },
    selectablePage: async ({ page }, use) => {
        await use(new SelectablePage(page))
    },
    sortablePage: async ({ page }, use) => {
        await use(new SortablePage(page))
    }
})

export const test = testPages;
