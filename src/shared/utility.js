export const findCardsOfList = (cards, listIndex) => {
    return cards.filter( card => card.listIndex === listIndex)
};