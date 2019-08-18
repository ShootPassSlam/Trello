export const findCard = (cards, index) => {
    const foundCard = cards[index];
    return {
        card: foundCard,
        draggedIndex: index,
        draggedListId: foundCard.listIndex
    }
};

export const findCardsOfList = (cards, listIndex) => {
    return cards.filter( card => card.listIndex === listIndex)
};