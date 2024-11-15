import { getElements } from "./getElements.js";
import { getItemPhoto } from "../api.js";
import { changeFavoriteIcon } from "../utils.js";

export const renderCatalogItems = async (data) => {
    const catalog = document.querySelector(".catalog");
    const itemTemplate = document.querySelector("#catalogItem");

    data.forEach(async (item) => {
        const img = await getItemPhoto(item.picture.path);
        const itemElementCopy = itemTemplate.content.cloneNode(true);

        const { nameElement, priceElement, photoElement, favButtonElement } =
            getElements(itemElementCopy);

        nameElement.textContent = item.name;
        priceElement.textContent = `$${item.price.value}`;
        photoElement.setAttribute("src", img);
        photoElement.setAttribute("alt", item.name);
        favButtonElement.addEventListener("click", changeFavoriteIcon);

        catalog.appendChild(itemElementCopy);
    });
};
