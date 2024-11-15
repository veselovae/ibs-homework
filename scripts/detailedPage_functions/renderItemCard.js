import { getCatalogItem, getItemPhoto } from "../api.js";
import { getElements } from "./getElements.js";

export const renderItemCard = async () => {
    const item = await getCatalogItem("571fc60d-ea2c-469e-a5b6-c229d31f195d");
    const itemImg = await getItemPhoto(item.picture.path);

    const itemCard = document.querySelector(".product-card");

    const {
        nameElement,
        priceElement,
        photoElement,
        descriptionElement,
        detailedDescriptionElement,
    } = getElements(itemCard);

    nameElement.textContent = item.name;
    priceElement.textContent = `$${item.price.value}`;
    photoElement.setAttribute("src", itemImg);
    photoElement.setAttribute("alt", item.name);
    descriptionElement.textContent = item.description;
    detailedDescriptionElement.textContent = item.details;
};
