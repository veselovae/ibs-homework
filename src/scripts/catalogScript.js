import "@styles/main.css";
import "@styles/catalogStyle.css";

import { getCatalogItems } from "@scripts/api.js";
import { debounce } from "@scripts/utils.js";
import { renderCatalogItems } from "@catalogFunc/renderCatalogItems.js";
import { rerenderCatalogByFiltering } from "@catalogFunc/rerenderCatalogByFiltering.js";

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
