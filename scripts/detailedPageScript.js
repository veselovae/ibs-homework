import { changeFavoriteIcon } from "./utils.js";
import { renderItemCard } from "./detailedPage_functions/renderItemCard.js";
import {
    increaseQuantityOfProduct,
    reduceQuantityOfProduct,
    checkProductQuantity,
} from "./detailedPage_functions/quantityFucntions.js";

// отрисовка карточки товара
renderItemCard();

// добавление функционала к кнопке "в избранное"
document
    .querySelector(".favorite-btn")
    .addEventListener("click", changeFavoriteIcon);

// увеличение количества товара
document
    .querySelector(".increase-btn")
    .addEventListener("click", increaseQuantityOfProduct);

// уменьшение количества товара
document
    .querySelector(".reduce-btn")
    .addEventListener("click", reduceQuantityOfProduct);

//исправление 0 или отрицательного количества товара
document
    .querySelector(".product-quantity")
    .addEventListener("change", checkProductQuantity);
