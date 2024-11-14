import { getCatalogItem, getItemPhoto } from "./api.js";
import { changeFavoriteIcon, getElements } from "./utils.js";

// отрисовка карточки товара

const renderParams = {
    nameElement: ".product-name",
    priceElement: ".product-price",
    photoElement: ".product-img",
    descriptionElement: ".product-description",
    detailedDescriptionElement: ".product-details-description",
};

const renderItemCard = async () => {
    const item = await getCatalogItem("571fc60d-ea2c-469e-a5b6-c229d31f195d");
    const itemImg = await getItemPhoto(item.picture.path);

    const itemCard = document.querySelector(".product-card");

    const {
        nameElement,
        priceElement,
        photoElement,
        descriptionElement,
        detailedDescriptionElement,
    } = getElements(itemCard, renderParams);

    nameElement.textContent = item.name;
    priceElement.textContent = `$${item.price.value}`;
    photoElement.setAttribute("src", itemImg);
    photoElement.setAttribute("alt", item.name);
    descriptionElement.textContent = item.description;
    detailedDescriptionElement.textContent = item.details;
};

renderItemCard();

// добавление функционала к кнопке "в избранное"
document
    .querySelector(".favorite-btn")
    .addEventListener("click", changeFavoriteIcon);

// увеличение количества товара
const increaseQuantityOfProduct = () => {
    const currentQuantity = Number(
        document.querySelector(".product-quantity").value
    );
    document.querySelector(".product-quantity").value = currentQuantity + 1;
};
document
    .querySelector(".increase-btn")
    .addEventListener("click", increaseQuantityOfProduct);

// уменьшение количества товара
const reduceQuantityOfProduct = () => {
    let productQuantityElem = document.querySelector(".product-quantity");

    if (Number(productQuantityElem.value) > 1) {
        productQuantityElem.value -= 1;
    }
};
document
    .querySelector(".reduce-btn")
    .addEventListener("click", reduceQuantityOfProduct);

//исправление 0 или отрицательного количества товара
const checkProductQuantity = () => {
    const currentQuantity = Number(
        document.querySelector(".product-quantity").value
    );
    if (currentQuantity <= 0) {
        document.querySelector(".product-quantity").value = 1;
    }
};
document
    .querySelector(".product-quantity")
    .addEventListener("change", checkProductQuantity);
