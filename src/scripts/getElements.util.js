import { getElements } from "./getElements.js";

export const getCatalogItemElements = (itemElement) => {
    return getElements(itemElement, {
        wrapper: ".catalog-item",
        title: ".item-name",
        image: ".item-photo",
        price: ".item-price",
        favoriteBtn: ".favorite-btn",
    });
};

export const getItemElements = (itemElement) => {
    return getElements(itemElement, {
        title: ".product-name",
        image: ".product-img",
        description: ".product-description",
        price: ".product-price",
        detailedDescription: ".product-details-description",
    });
};

export const getItemButtons = (itemElement) => {
    return getElements(itemElement, {
        increaseBtn: ".increase-btn",
        reduceBtn: ".reduce-btn",
        favoriteBtn: ".favorite-btn",
    });
};

export const getItemQuantityElement = (itemElement) => {
    return getElements(itemElement, {
        quantity: ".product-quantity",
    });
};
