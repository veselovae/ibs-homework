export const removeAllChildren = (parent) => {
    while (parent.firstChild) {
        parent.removeChild(parent.lastChild);
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
    favoriteBtn.querySelector(".favorite-icon").classList.toggle("active");
};