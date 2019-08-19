import * as actionTypes from './actionTypes';

export const addList = (name) =>{
    return {
        type: actionTypes.ADD_LIST,
        listName: name
    };
};

export const addCard = (cardName, listIndex) =>{
    return {
        type: actionTypes.ADD_CARD,
        listIndex: listIndex,
        cardName: cardName
    };
};

export const moveCard = (draggedListIndex, hoverListIndex, draggedCardIndex, hoverCardIndex, card) => {
    return {
        type: actionTypes.MOVE_CARD,
        draggedListIndex: draggedListIndex,
        hoverListIndex: hoverListIndex,
        draggedCardIndex: draggedCardIndex,
        hoverCardIndex: hoverCardIndex,
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