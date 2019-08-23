import * as actionTypes from '../actions/actionTypes';

const initialState = {
    listCounter: 0,
    cardCounter: 0,
    commentCounter: 0,
    lists: [],
    cards:[],
    comments:[],
    error: false
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
                cards: newCards
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
        case actionTypes.UPDATE_COMMENT:
            let updatedComment = state.comments[action.commentIndex];
            updatedComment.text = action.newCommentText
            updatedComment.date = Date.now();
            state.comments[action.commentIndex] = updatedComment;
            return{
                ...state,
                comments:[
                    ...state.comments
                ]
            };
        case actionTypes.DELETE_COMMENT:
            return{
                ...state,
                commentCounter: state.commentCounter-1,
                cards:
                    state.cards.map((card, index) => {
                        if (card.id !== action.cardId) {
                          return card
                        }
                        return {
                            ...card,
                            comments: card.comments.filter((comment, index) => {return comment !== state.comments[action.commentIndex].id})
                        }
                    }),
                comments: state.comments.filter((item, index) => index !== action.commentIndex)
            };
        case actionTypes.ADD_COMMENT:
            const newComment = { 
                id:`comment${state.commentCounter+1}`, 
                user: action.author, 
                text: action.commentText, 
                date: Date.now()
            }
            let newComments = state.comments.slice()
            newComments.splice(state.commentCounter,0,newComment)

            return{
                ...state,
                commentCounter: state.commentCounter+1,
                cards:
                    state.cards.map((card, index) => {
                        if (card.id !== action.cardId) {
                          return card
                        }
                        let cardComments = card.comments.slice()
                        cardComments.splice(cardComments.length,0,newComment.id)
                        return {
                            ...card,
                            comments: cardComments
                        }
                    }),
                comments: newComments
            }
        case actionTypes.SET_BOARDS:
            return{
                ...state,
                lists: action.lists,
                cards: action.cards,
                listCounter: action.listCounter,
                cardCounter: action.cardCounter,
                commentCounter: action.commentCounter
            }
        case actionTypes.SET_CARD:
            return{
                ...state,
                comments: action.comments
            }
        case actionTypes.FETCH_CARD_FAILED:
            return {
                ...state,
                error: true
            }
        case actionTypes.FETCH_BOARDS_FAILED:
            return {
                ...state,
                error: true
            }
        default:
            return state;   
    }
}

export default reducer;