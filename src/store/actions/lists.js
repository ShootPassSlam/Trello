import * as actionTypes from './actionTypes';

export const addList = (name, lists) =>{
    return {
        type: actionTypes.ADD_LIST,
        listName: name,
        listLength: Object.keys(lists).length +1
    };
};

export const addCard = (cardName, cards, listId) =>{
    return {
        type: actionTypes.ADD_CARD,
        cardName: cardName,
        cardLength: cards.length,
        listId: listId
    };
};

export const moveCard = (originalListId, newListId, currentIndex, newIndex, card) => {
    return {
        type: actionTypes.MOVE_CARD,
        originalListId: originalListId,
        newListId: newListId,
        currentIndex: currentIndex,
        newIndex: newIndex,
        card: card
    };
};

export const moveList = (originalListId, newListId) => {
    return {
        type: actionTypes.MOVE_LIST,
        originalListId: originalListId,
        newListId: newListId
    };
};