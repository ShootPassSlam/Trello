export const findCard = (props, id) => {
    console.log("props", props);
    console.log("id", id);
};

export const findCardsOfList = (cards, listId) => {
    console.log("cards", cards);
    console.log("listId", listId);
    return cards.filter( card => card.listId === listId)
};