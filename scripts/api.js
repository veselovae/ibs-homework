export const getCatalogItem = async (id) => {
    const response = await fetch("http://localhost:3006/item/" + id);
    const json = await response.json();
    return json.content;
};

export const getCatalogItems = async () => {
    const response = await fetch("http://localhost:3006/item");
    const json = await response.json();
    return json.content;
};

export const getItemPhoto = async (path) => {
    const url = "http://localhost:3006/" + path;
    const response = await fetch(url);
    const blob = await response.blob();
    const newBlob = new Blob([blob]);
    const newUrl = window.URL.createObjectURL(newBlob);

    return newUrl;
};
