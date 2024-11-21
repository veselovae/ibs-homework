import { removeAllChildren } from "@scripts/utils.js";
import { filterSearchResults } from "@catalogFunc/filterSearchResults.js";
import { renderCatalogItems } from "@catalogFunc/renderCatalogItems.js";
import { catalogItems } from "@scripts/catalogScript.js";

export const rerenderCatalogByFiltering = async () => {
    const catalog = document.querySelector(".catalog");

    removeAllChildren(catalog);

    const filtered = filterSearchResults(catalogItems);
    await renderCatalogItems(filtered);
};
