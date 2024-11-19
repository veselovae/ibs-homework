import { getCatalogItemElements } from "../getElements.util.js";
import { getItemPhoto } from "../api.js";
import { stopOpeningCard, openProductCard } from "../utils.js";

export const renderCatalogItems = async (data) => {
    const catalog = document.querySelector(".catalog");
    const itemTemplate = document.querySelector("#catalogItem");

    data.forEach(async (item) => {
        const img = await getItemPhoto(item.picture.path);
        const itemElementCopy = itemTemplate.content.cloneNode(true);

        const { wrapper, title, price, image, favoriteBtn } =
            getCatalogItemElements(itemElementCopy);

        wrapper.addEventListener("click", () =>
            openProductCard("detailedPage.html")
        );
        title.textContent = item.name;
        price.textContent = `$${item.price.value}`;
        image.setAttribute("src", img);
        image.setAttribute("alt", item.name);
        favoriteBtn.addEventListener("click", stopOpeningCard);

        catalog.appendChild(itemElementCopy);
    });
};
