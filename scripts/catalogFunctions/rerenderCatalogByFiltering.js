import { removeAllChildren } from "../utils.js";
import { filterSearchResults } from "./filterSearchResults.js";
import { renderCatalogItems } from "./renderCatalogItems.js";
import { catalogItems } from "../catalogScript.js";

export const rerenderCatalogByFiltering = async () => {
    const catalog = document.querySelector(".catalog");

    removeAllChildren(catalog);

    const filtered = filterSearchResults(catalogItems);
    await renderCatalogItems(filtered);
};
