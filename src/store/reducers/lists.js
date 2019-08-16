import * as actionTypes from '../actions/actionTypes';

const initialState = {
    listCounter: 2,
    cardCounter: 8,
    lists: [
        {
            listId:1,
            text: "Game One",
        },
        {
            listId:2,
            text: "Game Two"
        }
    ],
    cards:[
        {
            cardId: 1,
            listId: 1,
            title: 'Come up with a great game idea',
            description: "first Description"
        },
        {
            cardId: 2,
            listId: 1,
            title: 'Write a solid spec outlining the idea',
            description: ""
        },
        {
            cardId: 3,
            listId: 1,
            title: 'Build and MVP Prototype',
            description: ""
        },
        {
            cardId: 4,
            listId: 1,
            title: 'Iterate on the prototype until fun',
            description: ""
        },
        {
            cardId: 5,
            listId: 1,
            title: 'Launch and gather player data',
            description: ""
        },
        {
            cardId: 6,
            listId: 1,
            title: 'Iterate based on player data',
            description: ""
        },
        {
            cardId: 7,
            listId: 1,
            title: 'PROFIT',
            description: ""
        },
        {
            cardId: 8,
            listId: 2,
            title: 'Do it all again',
            description: ""
        }
    ],
    comments:[
        {
            cardid:1,
            text: "First Comment",
        },
        {
            cardid:1,
            text: "Second Comment",
        },
        {},
        {},
        {},
        {},
        {},
        {},
    ]
};

const reducer = (state=initialState, action) =>{
    switch(action.type){
        case actionTypes.ADD_LIST:
            const newList = {listId: state.listCounter+1, text: action.listName};
            return{
                ...state,
                listCounter: state.listCounter+1,
                lists: [
                    ...state.lists,
                    newList
                ]
            };
        case actionTypes.ADD_CARD:
            const newCard = {cardId:state.cardCounter+1, listId:action.listId, title: action.cardName, description:""}
            return{
                ...state,
                cardCounter: state.cardCounter+1,
                cards:[
                    ...state.cards,
                    newCard
                ]
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