export const filterSearchResults = (initialData) => {
    const searchParam = document
        .querySelector(".search-input")
        .value.toLowerCase();

    const filteredData = initialData.filter(({ name }) =>
        name.toLowerCase().includes(searchParam)
    );

    return filteredData;
};
