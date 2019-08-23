import * as actionTypes from './actionTypes';
import axios from 'axios';

export const addList = (newList) =>{
    return {
        type: actionTypes.ADD_LIST,
        newList: newList
    };
};

export const addCard = (newCard) =>{
    return {
        type: actionTypes.ADD_CARD,
        newCard: newCard
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

export const setBoards = (lists, cards) => {
    return {
        type: actionTypes.SET_BOARDS,
        lists: lists,
        cards: cards,
        listCounter: lists.length,
        cardCounter: cards.length
    };
};

export const fetchBoardsFailed = () => {
    return {
        type: actionTypes.FETCH_BOARDS_FAILED
    };
};

export const setCard = (comments) => {
    return {
        type: actionTypes.SET_CARD,
        comments: comments,
        commentCounter: comments.length
    }
};

export const fetchCardFailed = () => {
    return {
        type: actionTypes.FETCH_CARD_FAILED
    };
};

export const addCardFail = (error) => {
    return{
        type: actionTypes.ADD_CARD_FAILED,
        error: error
    };
};

export const addListFail = (error) => {
    return{
        type: actionTypes.ADD_LIST_FAILED,
        error: error
    };
};

export const initBoards = () => {
    return dispatch => {
        axios.all([
            axios.get('https://trello-33445.firebaseio.com/lists.json'),
            axios.get('https://trello-33445.firebaseio.com/cards.json'),
        ])
        .then(axios.spread((listsRes, cardsRes) => {
            dispatch(setBoards(
                Object.values(listsRes.data), 
                Object.values(cardsRes.data)
            ));
        }))
        .catch(error=>{
            dispatch(fetchBoardsFailed());
        });
    };
};

export const initCard = () => {
    return dispatch => {
        axios.get('https://trello-33445.firebaseio.com/comments.json')
            .then( response => {
                dispatch(setCard(response.data));
            })
            .catch( error =>{
                dispatch(fetchCardFailed());
            });
    };
};

export const addCardToDatabase = (cardData) => {
    return dispatch =>{
        axios.post('https://trello-33445.firebaseio.com/cards.json', cardData)
            .then(response => {
                dispatch(addCard(cardData));
            })
            .catch(error => {
                dispatch(addCardFail(error));
            });
    };
};

export const addListToDatabase = (listData) => {
    return dispatch =>{
        axios.post('https://trello-33445.firebaseio.com/lists.json', listData)
            .then(response => {
                dispatch(addList(listData));
            })
            .catch(error => {
                dispatch(addListFail(error));
            });
    };
};