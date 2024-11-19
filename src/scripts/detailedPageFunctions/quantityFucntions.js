export const increaseQuantityOfProduct = () => {
    const quantityElem = document.querySelector(".product-quantity");
    const currentQuantity = Number(quantityElem.value);
    quantityElem.value = currentQuantity + 1;
};

export const reduceQuantityOfProduct = () => {
    let productQuantityElem = document.querySelector(".product-quantity");

    if (Number(productQuantityElem.value) > 1) {
        productQuantityElem.value -= 1;
    }
};

export const checkProductQuantity = () => {
    const quantityElem = document.querySelector(".product-quantity");
    const currentQuantity = Number(quantityElem.value);
    if (currentQuantity <= 0) {
        quantityElem.value = 1;
    }
};
