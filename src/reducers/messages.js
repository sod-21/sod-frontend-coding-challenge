import { ADD_MESSAGE, CLEAR_MESSAGES, DELETE_MESSAGE } from "../constants/index";

const intialState = [];

function messageReducers( state = intialState, action) {
    switch( action.type ) {
        case ADD_MESSAGE:
            return [
                ...state.slice(),
                action.payload
            ]
        case CLEAR_MESSAGES:
            return [

            ];
        case DELETE_MESSAGE:
            state.splice(action.payload, 1);            
            return [
                ...state
            ];
        default: 
            return state;
    }
}

export default messageReducers;