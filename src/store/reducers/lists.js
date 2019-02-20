import * as actionTypes from '../actions/actionTypes';

const initialState = {
    lists: {}
};

const reducer = (state=initialState, action) =>{
    switch(action.type){
        case actionTypes.ADD_LIST:
            return{
                ...state,
                lists: {
                    ...state.lists, 
                    [action.listName]: []
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
            return{
                ...state,
                lists: {
                    ...state.lists,
                   [action.listName]: [
                        ...state.lists[action.listName],
                        action.cardName
                   ]
                }
            }
        default:
            return state;
    }
}

export default reducer;