export const getElements = (parentElement, params) => {
    const elements = {};

    Object.entries(params).forEach(([key, value]) => {
        elements[key] = parentElement.querySelector(value);
    });

    return elements;
};
