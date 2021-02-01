//Returnt een projectsPerPage aantal objecten aan de hand van de selectedStep en een array van project objecten
export const getDisplayedItems = (array, itemsPerPage, selectedStep) => {
    let displayedItems = [];

    const startIndex = itemsPerPage * selectedStep - itemsPerPage;

    for (let i = startIndex; i < startIndex + itemsPerPage; i++) {
        if (i < array.length) {
        displayedItems.push(array[i]);
        }
    }
    return displayedItems
    }

export const getPagesAmount = (array, itemsPerPage) => {
    return Math.ceil(array.length / itemsPerPage)
}