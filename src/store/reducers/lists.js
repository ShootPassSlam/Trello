import * as actionTypes from '../actions/actionTypes';

const initialState = {
    listCounter: 2,
    cardCounter: 8,
    lists: [
        {
            text: "Game One",
        },
        {
            text: "Game Two"
        }
    ],
    cards:[
        {
            listIndex: 0,
            title: 'Come up with a great game idea',
            description: "first Description"
        },
        {
            listIndex: 0,
            title: 'Write a solid spec outlining the idea',
            description: ""
        },
        {
            listIndex: 0,
            title: 'Build and MVP Prototype',
            description: ""
        },
        {
            listIndex: 0,
            title: 'Iterate on the prototype until fun',
            description: ""
        },
        {
            listIndex: 0,
            title: 'Launch and gather player data',
            description: ""
        },
        {
            listIndex: 0,
            title: 'Iterate based on player data',
            description: ""
        },
        {
            listIndex: 0,
            title: 'PROFIT',
            description: ""
        },
        {
            listIndex: 1,
            title: 'Do it all again',
            description: ""
        }
    ],
    comments:[
        {
            cardIndex:0,
            text: "First Comment",
        },
        {
            cardIndex:0,
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
            const newList = {listIndex: state.listCounter+1, text: action.listName};
            return{
                ...state,
                listCounter: state.listCounter+1,
                lists: [
                    ...state.lists,
                    newList
                ]
            };
        case actionTypes.ADD_CARD:
            const newCard = {listIndex:action.listIndex, title: action.cardName, description:""}
            return{
                ...state,
                cardCounter: state.cardCounter+1,
                cards:[
                    ...state.cards,
                    newCard
                ]
            };
        case actionTypes.MOVE_CARD:
            let newCards = [
                ...state.cards
            ]
            action.card.listIndex = action.hoverListIndex;
            newCards.splice(action.draggedCardIndex,1);
            newCards.splice(action.hoverCardIndex,0, action.card);
            return{
                ...state,
                cards: [...newCards]
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