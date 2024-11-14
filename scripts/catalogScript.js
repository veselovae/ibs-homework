import { getCatalogItems, getItemPhoto } from "./api.js";
import {
    removeAllChildren,
    debounce,
    changeFavoriteIcon,
    getElements,
} from "./utils.js";

const renderParams = {
    nameElement: ".item-name",
    priceElement: ".item-price",
    photoElement: ".item-photo",
    favButtonElement: ".favorite-btn",
};

const renderCatalogItems = async (data) => {
    const catalog = document.querySelector(".catalog");
    const itemTemplate = document.querySelector("#catalogItem");

    data.forEach(async (item) => {
        const img = await getItemPhoto(item.picture.path);
        const itemElementCopy = itemTemplate.content.cloneNode(true);

        const { nameElement, priceElement, photoElement, favButtonElement } =
            getElements(itemElementCopy, renderParams);

        nameElement.textContent = item.name;
        priceElement.textContent = `$${item.price.value}`;
        photoElement.setAttribute("src", img);
        photoElement.setAttribute("alt", item.name);
        favButtonElement.addEventListener("click", changeFavoriteIcon);

        catalog.appendChild(itemElementCopy);
    });
};

let catalogItems;

// отрисовать данные с сервера после загрузки страницы
const initCatalogList = async () => {
    catalogItems = await getCatalogItems();
    await renderCatalogItems(catalogItems);
};
document.addEventListener("DOMContentLoaded", initCatalogList);

// отфильтровать данные по запросу
const filterSearchResults = (initialData) => {
    const searchParam = document
        .querySelector(".search-input")
        .value.toLowerCase();

    const filteredData = initialData.filter(({ name }) =>
        name.toLowerCase().includes(searchParam)
    );

    return filteredData;
};

// отрисовать данные после фильтрации
const rerenderCatalogByFiltering = async () => {
    const catalog = document.querySelector(".catalog");

    removeAllChildren(catalog);

    const filtered = filterSearchResults(catalogItems);
    await renderCatalogItems(filtered);
};

const searchInputElement = document.querySelector(".search-input");
searchInputElement.addEventListener(
    "input",
    debounce(rerenderCatalogByFiltering, 800)
);
