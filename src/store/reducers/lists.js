import * as actionTypes from '../actions/actionTypes';

const initialState = {
    lists: {
        1:{
            name: "first List",
            cards: [
                {
                    id: "L1C1",
                    text: 'Write a cool JS library',
                },
                {
                    id: "L1C2",
                    text: 'Make it generic enough',
                },
                {
                    id: "L1C3",
                    text: 'Write README',
                },
                {
                    id: "L1C4",
                    text: 'Create some examples',
                },
                {
                    id: "L1C5",
                    text: 'Spam in Twitter and IRC to promote it',
                },
                {
                    id: "L1C6",
                    text: '???',
                },
                {
                    id: "L1C7",
                    text: 'PROFIT',
                }
            ]
        },
        2:{
            name: "second List",
            cards: [
                {
                    id: "L2C1",
                    text: 'Second List Card',
                }
            ]
        }
    }
};

const reducer = (state=initialState, action) =>{
    switch(action.type){
        case actionTypes.ADD_LIST:
            const newList = {name: action.listName, cards:[]};
            return{
                ...state,
                lists: {
                    ...state.lists,
                    [action.listLength]: newList
                }
            };
        case actionTypes.REMOVE_LIST:
            return{
                ...state,
                lists:  [
                    ...state.lists.slice(0, state.lists.indexOf(action.listName)),
                    ...state.lists.slice(state.lists.indexOf(action.listName)+1)
                ]
            };
        case actionTypes.ADD_CARD:
            const newCard = {id: action.cardLength+1, text: action.cardName}
            return{
                ...state,
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
            if(action.originalListId === action.newListId){
                originalListCards.splice(action.currentIndex, 1)
                originalListCards.splice(action.newIndex, 0, action.card)
                newListCards = originalListCards
            }
            else{
                console.log("IN HERE?")
                originalListCards.splice(action.currentIndex, 1)
                newListCards.splice(action.newIndex, 0, action.card)
                console.log(originalListCards)
                console.log(newListCards)
            }
            // val.splice(to, 0, val.splice(from, 1)[0])
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
        default:
            return state;
    }
}

export default reducer;