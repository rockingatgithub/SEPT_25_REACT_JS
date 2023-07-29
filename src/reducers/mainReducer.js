import { initialState } from "./index";

// Return new state based on the type of action call
export function mainReducer(state = initialState, action) {

    switch (action.type) {
        case 'SIGNIN':

            return { ...state, isLoggedIn: true, user: action.data };
        case 'SIGNUP':

            return { ...state, isLoggedIn: true, user: action.data };
        case 'INC_COUNTER':

            return { ...state, counter: state.counter + action.data };
        case 'DEC_COUNTER':

            return { ...state, counter: state.counter - action.data };

        default:
            return state;
    }

}
