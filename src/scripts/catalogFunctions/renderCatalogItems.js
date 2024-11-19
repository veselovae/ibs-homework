import { getCatalogItemElements } from "../getElements.util.js";
import { getItemPhoto } from "../api.js";
import { changeFavoriteIcon } from "../utils.js";

const openProductCard = () => {
    console.log(window.location);
    // window.location.href = "./detailedPage.html";

    // window.location.pathname = "/detailedPage.html";
};

const stopOpeningCard = (e) => {
    e.stopPropagation();
    changeFavoriteIcon(e);
};

export const renderCatalogItems = async (data) => {
    const catalog = document.querySelector(".catalog");
    const itemTemplate = document.querySelector("#catalogItem");

    data.forEach(async (item) => {
        const img = await getItemPhoto(item.picture.path);
        const itemElementCopy = itemTemplate.content.cloneNode(true);

        const { wrapper, title, price, image, favoriteBtn } =
            getCatalogItemElements(itemElementCopy);

        wrapper.addEventListener("click", () => openProductCard(item.id));
        title.textContent = item.name;
        price.textContent = `$${item.price.value}`;
        image.setAttribute("src", img);
        image.setAttribute("alt", item.name);
        favoriteBtn.addEventListener("click", stopOpeningCard);

        catalog.appendChild(itemElementCopy);
    });
};
