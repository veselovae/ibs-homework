import { getCatalogItems, getItemPhoto } from "./api.js";
import { removeAllChildren, debounce, changeFavoriteIcon } from "./utils.js";

const renderCatalogItems = async (data) => {
    const catalog = document.querySelector(".catalog");
    const itemTemplate = document.querySelector("#catalogItem");

    data.forEach(async (item) => {
        const img = await getItemPhoto(item.picture.path);
        const itemElementCopy = itemTemplate.content.cloneNode(true);

        itemElementCopy.querySelector(".item-name").textContent = item.name;
        itemElementCopy.querySelector(
            ".item-price"
        ).textContent = `$${item.price.value}`;
        itemElementCopy.querySelector(".item-photo").setAttribute("src", img);
        itemElementCopy
            .querySelector(".item-photo")
            .setAttribute("alt", item.name);

        itemElementCopy
            .querySelector(".favorite-btn")
            .addEventListener("click", changeFavoriteIcon);

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

    const filteredData = initialData.filter((el) =>
        el.name.toLowerCase().includes(searchParam)
    );

    return filteredData;
};

// отрисовать данные после фильтрации
const rerenderCatalogByFiltering = async () => {
    const catalog = document.querySelector(".catalog");

    const template = catalog.children[0];
    removeAllChildren(catalog);
    catalog.appendChild(template);

    const filtered = filterSearchResults(catalogItems);
    await renderCatalogItems(filtered);
};

const searchInputElement = document.querySelector(".search-input");
searchInputElement.addEventListener(
    "input",
    debounce(rerenderCatalogByFiltering, 800)
);
