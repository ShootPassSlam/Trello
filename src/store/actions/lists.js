import * as actionTypes from './actionTypes';

export const addList = (name) =>{
    return {
        type: actionTypes.ADD_LIST,
        listName: name
    };
};

export const addCard = (cardName, listId) =>{
    return {
        type: actionTypes.ADD_CARD,
        listId: listId,
        cardName: cardName
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