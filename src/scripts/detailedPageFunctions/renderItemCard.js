import { getCatalogItem, getItemPhoto } from "@scripts/api.js";
import { getItemElements } from "@scripts/getElements.util.js";

export const renderItemCard = async () => {
    const item = await getCatalogItem("571fc60d-ea2c-469e-a5b6-c229d31f195d");
    const itemImg = await getItemPhoto(item.picture.path);

    const itemCard = document.querySelector(".product-card");

    const { title, price, image, description, detailedDescription } =
        getItemElements(itemCard);

    title.textContent = item.name;
    price.textContent = `$${item.price.value}`;
    image.setAttribute("src", itemImg);
    image.setAttribute("alt", item.name);
    description.textContent = item.description;
    detailedDescription.textContent = item.details;
};
