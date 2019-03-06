import * as actionTypes from '../actions/actionTypes';

const initialState = {
    cardCounter: 8,
    lists: {
        1:{
            id: 1,
            name: "Game One",
            cards: [
                {
                    id: "L1C1",
                    text: 'Come up with a great game idea',
                },
                {
                    id: "L1C2",
                    text: 'Write a solid spec outlining the idea',
                },
                {
                    id: "L1C3",
                    text: 'Build and MVP Prototype',
                },
                {
                    id: "L1C4",
                    text: 'Iterate on the prototype until fun',
                },
                {
                    id: "L1C5",
                    text: 'Launch and gather player data',
                },
                {
                    id: "L1C6",
                    text: 'Iterate based on player data',
                },
                {
                    id: "L1C7",
                    text: 'PROFIT',
                }
            ]
        },
        2:{
            id: 2,
            name: "Game Two",
            cards: [
                {
                    id: "L2C8",
                    text: 'Do it all again',
                }
            ]
        }
    }
};

const reducer = (state=initialState, action) =>{
    switch(action.type){
        case actionTypes.ADD_LIST:
            const newList = {id: action.listLength, name: action.listName, cards:[]};
            return{
                ...state,
                lists: {
                    ...state.lists,
                    [action.listLength]: newList
                }
            };
        case actionTypes.ADD_CARD:
            const newCard = {id: `L${action.listId}C${state.cardCounter+1}`, text: action.cardName}
            return{
                ...state,
                cardCounter: state.cardCounter+1,
                lists: {
                    ...state.lists,
                   [action.listId]: {
                        ...state.lists[action.listId],
                        cards:[
                            ...state.lists[action.listId].cards,
                            newCard
                        ]
                    }
                }
            };
        case actionTypes.MOVE_CARD:
            const originalList = {...state.lists[action.originalListId]}
            const originalListCards = [...originalList.cards]
            const newListy = {...state.lists[action.newListId]}
            let newListCards = [...newListy.cards]
            originalListCards.splice(action.currentIndex, 1)
            if(action.originalListId === action.newListId){
                originalListCards.splice(action.newIndex, 0, action.card)
                newListCards = originalListCards
            }
            else{
                newListCards.splice(action.newIndex, 0, action.card)
            }
            return{
                ...state,
                lists: {
                    ...state.lists,
                    [action.originalListId]:{
                        ...state.lists[action.originalListId],
                        cards: originalListCards
                    },
                    [action.newListId]:{
                        ...state.lists[action.newListId],
                        cards: newListCards
                    }
                }
            };
        case actionTypes.MOVE_LIST:
            [action.originalListId, action.newListId] = [action.newListId, action.originalListId]
            return{
                ...state,
                lists: {
                    ...state.lists,
                    [action.originalListId]:{
                        ...state.lists[action.newListId]
                    },
                    [action.newListId]:{
                        ...state.lists[action.originalListId]
                    }
                }
            };
        default:
            return state;   
    }
}

export default reducer;