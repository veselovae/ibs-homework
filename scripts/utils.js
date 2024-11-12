export const removeAllChildren = (parent) => {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};

export const debounce = (callback, delay) => {
    let timeout;
    return function () {
        clearTimeout(timeout);
        timeout = setTimeout(callback, delay);
    };
};

export const changeFavoriteIcon = (event) => {
    const favoriteBtn = event.currentTarget;
    const use = favoriteBtn.querySelector("use");

    if (use.getAttribute("xlink:href") === "#favorite") {
        use.setAttribute("xlink:href", "#favoriteActive");
        use.parentElement.classList.add("active");
    } else {
        use.setAttribute("xlink:href", "#favorite");
        use.parentElement.classList.remove("active");
    }
};
