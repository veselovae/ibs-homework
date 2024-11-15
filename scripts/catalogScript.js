import { getCatalogItems } from "./api.js";
import { debounce } from "./utils.js";
import { renderCatalogItems } from "./catalog_functions/renderCatalogItems.js";
import { rerenderCatalogByFiltering } from "./catalog_functions/rerenderCatalogByFiltering.js";

export let catalogItems;

// отрисовать данные с сервера после загрузки страницы
const initCatalogList = async () => {
    catalogItems = await getCatalogItems();
    await renderCatalogItems(catalogItems);
};
document.addEventListener("DOMContentLoaded", initCatalogList);

// отрисовать данные после фильтрации
const searchInputElement = document.querySelector(".search-input");
searchInputElement.addEventListener(
    "input",
    debounce(rerenderCatalogByFiltering, 800)
);
