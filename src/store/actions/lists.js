import * as actionTypes from './actionTypes';

export const addList = (name) =>{
    return {
        type: actionTypes.ADD_LIST,
        listName: name
    };
};

export const removeList = (name) =>{
    return {
        type: actionTypes.REMOVE_LIST,
        listName: name
    };
};

export const addCard = (cardName, listName) =>{
    return {
        type: actionTypes.ADD_CARD,
        cardName: cardName,
        listName: listName
    };
};