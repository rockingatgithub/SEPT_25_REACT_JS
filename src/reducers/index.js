import { mainReducer } from "./mainReducer";

export const initialState = {
    isLoggedIn: false,
    user: {},
    counter: 0,
}

export default mainReducer