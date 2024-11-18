import { getCatalogItemElements } from "../getElements.util.js";
import { getItemPhoto } from "../api.js";
import { changeFavoriteIcon } from "../utils.js";

export const renderCatalogItems = async (data) => {
    const catalog = document.querySelector(".catalog");
    const itemTemplate = document.querySelector("#catalogItem");

    data.forEach(async (item) => {
        const img = await getItemPhoto(item.picture.path);
        const itemElementCopy = itemTemplate.content.cloneNode(true);

        const { title, price, image, favoriteBtn } =
            getCatalogItemElements(itemElementCopy);

        title.textContent = item.name;
        price.textContent = `$${item.price.value}`;
        image.setAttribute("src", img);
        image.setAttribute("alt", item.name);
        favoriteBtn.addEventListener("click", changeFavoriteIcon);

        catalog.appendChild(itemElementCopy);
    });
};
