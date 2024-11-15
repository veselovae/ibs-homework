export const getElements = (parentElement) => {
    const elements = {};

    const renderParams = {
        nameElement: ".product-name",
        priceElement: ".product-price",
        photoElement: ".product-img",
        descriptionElement: ".product-description",
        detailedDescriptionElement: ".product-details-description",
    };

    Object.entries(renderParams).map(([key, value]) => {
        elements[key] = parentElement.querySelector(value);
    });

    return elements;
};
