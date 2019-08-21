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

export const moveList = (originalListIndex, newListIndex) => {
    return {
        type: actionTypes.MOVE_LIST,
        originalListIndex: originalListIndex,
        newListIndex: newListIndex
    };
};

export const updateComment = (commentIndex, newCommentText) => {
    return {
        type: actionTypes.UPDATE_COMMENT,
        commentIndex: commentIndex,
        newCommentText: newCommentText
    };
};

export const deleteComment = (commentIndex, cardId) => {
    return {
        type: actionTypes.DELETE_COMMENT,
        commentIndex: commentIndex,
        cardId: cardId
    };
};

export const newComment = (commentText, author, cardId) => {
    return {
        type: actionTypes.ADD_COMMENT,
        commentText: commentText,
        author: author,
        cardId: cardId
    };
};