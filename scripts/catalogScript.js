import { getCatalogItems, getItemPhoto } from "./api.js";
import { removeAllChildren, debounce, changeFavoriteIcon } from "./utils.js";

const renderCatalogItems = async (data) => {
    const catalog = document.querySelector(".catalog");
    const itemTemplate = document.querySelector("#catalogItem");

    data.forEach(async (item) => {
        const img = await getItemPhoto(item.picture.path);
        const itemElementCopy = itemTemplate.content.cloneNode(true);

        itemElementCopy.querySelector(".item-name").textContent = item.name;
        itemElementCopy.querySelector(".item-price").textContent =
            "$ " + item.price.value;
        itemElementCopy.querySelector(".item-photo").setAttribute("src", img);

        itemElementCopy
            .querySelector(".favorite-btn")
            .addEventListener("click", changeFavoriteIcon);

        catalog.appendChild(itemElementCopy);
    });

    catalog.style.display = "flex";
};

let catalogItems;

// отрисовать данные с сервера после загрузки страницы
const initCatalogList = async () => {
    catalogItems = await getCatalogItems();

    await renderCatalogItems(catalogItems);
};
document.addEventListener("DOMContentLoaded", initCatalogList);

const filterSearchResults = async () => {
    const searchParam = document.querySelector(".search-input").value;
    const catalog = document.querySelector(".catalog");

    const filteresData = catalogItems.filter((el) =>
        el.name.toLowerCase().includes(searchParam.toLowerCase())
    );

    const template = catalog.children[0];
    removeAllChildren(catalog);
    catalog.appendChild(template);

    await renderCatalogItems(filteresData);
};

const searchInputElement = document.querySelector(".search-input");
searchInputElement.addEventListener(
    "input",
    debounce(filterSearchResults, 800)
);
