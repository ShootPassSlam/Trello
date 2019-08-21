import * as actionTypes from '../actions/actionTypes';

const initialState = {
    listCounter: 2,
    cardCounter: 8,
    commentCounter: 2,
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
            let comments = state.comments;
            let cardWithComment = state.cards.find( card => card.id === action.cardId);
            const indexOfComment = cardWithComment.comments.indexOf(comments[action.commentIndex].id);
            cardWithComment.comments.splice(indexOfComment,1);
            state.cards[action.cardId]=cardWithComment;
            comments.splice(action.commentIndex,1);
            return{
                ...state,
                commentCounter: state.commentCounter-1,
                cards:[
                    ...state.cards
                ],
                comments:[
                    ...comments
                ]
            };
        case actionTypes.ADD_COMMENT:
            const newComment = { 
                id:`comment${state.commentCounter+1}`, 
                user: action.author, 
                text: action.commentText, 
                date: Date.now()
            }
            let cardWithNewComment = state.cards.find( card => card.id === action.cardId);
            cardWithNewComment.comments.push(newComment.id);
            state.cards[action.cardId]=cardWithNewComment;
            state.comments.push(newComment)
            return{
                ...state,
                commentCounter: state.commentCounter+1,
                cards:[
                    ...state.cards
                ],
                comments:[
                    ...state.comments
                ]
            }
        default:
            return state;   
    }
}

export default reducer;