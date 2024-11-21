import "@styles/main.css";
import "@styles/detailedPageStyle.css";

import { changeFavoriteIcon } from "./utils.js";
import { renderItemCard } from "@detailedFunc/renderItemCard.js";
import {
    increaseQuantityOfProduct,
    reduceQuantityOfProduct,
    checkProductQuantity,
} from "@detailedFunc/quantityFucntions.js";
import { getItemButtons, getItemQuantityElement } from "./getElements.util.js";

// отрисовка карточки товара
renderItemCard();

const { increaseBtn, reduceBtn, favoriteBtn } = getItemButtons(document);

// добавление функционала к кнопке "в избранное"
favoriteBtn.addEventListener("click", changeFavoriteIcon);

// увеличение количества товара
increaseBtn.addEventListener("click", increaseQuantityOfProduct);

// уменьшение количества товара
reduceBtn.addEventListener("click", reduceQuantityOfProduct);

//исправление 0 или отрицательного количества товара
const { quantity } = getItemQuantityElement(document);
quantity.addEventListener("change", checkProductQuantity);
