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
            id:"card1",
            listIndex: 0,
            title: 'Come up with a great game idea',
            description: "first Description",
            comments:["comment1", "comment2"]
        },
        {
            id:"card2",
            listIndex: 0,
            title: 'Write a solid spec outlining the idea',
            description: "",
            comments:[]
        },
        {
            id:"card3",
            listIndex: 0,
            title: 'Build and MVP Prototype',
            description: "",
            comments:[]
        },
        {
            id:"card4",
            listIndex: 0,
            title: 'Iterate on the prototype until fun',
            description: "",
            comments:[]
        },
        {
            id:"card5",
            listIndex: 0,
            title: 'Launch and gather player data',
            description: "",
            comments:[]
        },
        {
            id:"card6",
            listIndex: 0,
            title: 'Iterate based on player data',
            description: "",
            comments:[]
        },
        {
            id:"card7",
            listIndex: 0,
            title: 'PROFIT',
            description: "",
            comments:[]
        },
        {
            id:"card8",
            listIndex: 1,
            title: 'Do it all again',
            description: "",
            comments:[]
        }
    ],
    comments:[
        {
            id:"comment1",
            user: "Dominic Scotto",
            text: "First Comment",
            date: Date.now()
        },
        {
            id:"comment2",
            user: "Dominic Scotto",
            text: "Second Comment",
            date: Date.now()
        }
    ]
};

const reducer = (state=initialState, action) =>{
    switch(action.type){
        case actionTypes.ADD_LIST:
            const newList = {text: action.listName};
            return{
                ...state,
                listCounter: state.listCounter+1,
                lists: [
                    ...state.lists,
                    newList
                ]
            };
        case actionTypes.ADD_CARD:
            const newCard = {
                id:`card${state.cardCounter+1}`, 
                listIndex:action.listIndex, 
                title: action.cardName, 
                description:"", 
                comments:[]
            }

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
            ];
            action.card.listIndex = action.hoverListIndex;
            newCards.splice(action.draggedCardIndex,1);
            newCards.splice(action.hoverCardIndex, 0, action.card);

            return{
                ...state,
                cards: [...newCards]
            };
        case actionTypes.MOVE_LIST:
            let newLists = [
                ...state.lists
            ];

            const movingList = newLists.splice(action.originalListIndex,1)[0];
            newLists.splice(action.newListIndex, 0, movingList);
            
            let cardSwaps = {}
            state.lists.forEach( (list, key) => {
                if (list !== newLists[key]){
                    cardSwaps[`${key}`]= newLists.indexOf(list);
                }
            });

            const updatedCards = state.cards.map( card =>{
                if(cardSwaps[card.listIndex]!== undefined){
                    card.listIndex = cardSwaps[card.listIndex];
                }
                return card;
            });

            return{
                ...state,
                lists: [...newLists],
                cards: updatedCards
            };
        default:
            return state;   
    }
}

export default reducer;