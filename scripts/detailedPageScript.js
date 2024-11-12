import { getCatalogItem, getItemPhoto } from "./api.js";
import { changeFavoriteIcon } from "./utils.js";

// отрисовка карточки товара
const renderItemCard = async () => {
    const item = await getCatalogItem("571fc60d-ea2c-469e-a5b6-c229d31f195d");
    const itemImg = await getItemPhoto(item.picture.path);

    const itemCard = document.querySelector(".product-card");

    itemCard.querySelector(".product-img").setAttribute("src", itemImg);
    itemCard.querySelector(".product-name").textContent = item.name;
    itemCard.querySelector(".product-description").textContent =
        item.description;
    itemCard.querySelector(".product-details-description").textContent =
        item.details;
    itemCard.querySelector(".product-price").textContent =
        "$" + item.price.value;
};

renderItemCard();

// добавление функционала к кнопке "в избранное"
document
    .querySelector(".favorite-btn")
    .addEventListener("click", changeFavoriteIcon);

// увеличение количества товара
const increaseQuantityOfProduct = () => {
    const currentQuantity = +document.querySelector(".product-quantity").value;
    document.querySelector(".product-quantity").value = currentQuantity + 1;
};
document
    .querySelector(".increase-btn")
    .addEventListener("click", increaseQuantityOfProduct);

// уменьшение количества товара
const reduceQuantityOfProduct = () => {
    let productQuantityElem = document.querySelector(".product-quantity");

    if (+productQuantityElem.value > 1) {
        productQuantityElem.value -= 1;
    }
};
document
    .querySelector(".reduce-btn")
    .addEventListener("click", reduceQuantityOfProduct);

//исправление 0 или отрицательного количества товара
const checkProductQuantity = () => {
    const currentQuantity = +document.querySelector(".product-quantity").value;
    if (currentQuantity <= 0) {
        document.querySelector(".product-quantity").value = 1;
    }
};
document
    .querySelector(".product-quantity")
    .addEventListener("change", checkProductQuantity);
