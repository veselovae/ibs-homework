export const getElements = (parentElement) => {
    const elements = {};

    const renderParams = {
        nameElement: ".item-name",
        priceElement: ".item-price",
        photoElement: ".item-photo",
        favButtonElement: ".favorite-btn",
    };

    Object.entries(renderParams).map(([key, value]) => {
        elements[key] = parentElement.querySelector(value);
    });

    return elements;
};
