export const getElements = (parentElement, params) => {
    return Object.fromEntries(
        Object.entries(params).map(([key, value]) => {
            return [key, parentElement.querySelector(value)];
        })
    );
};
