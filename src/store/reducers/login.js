import { SIGNIN, SIGNOUT } from "../actions"


const initialState = {
    isAuth: false,
}
export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNIN:
            return { ...state, isAuth: false };
        case SIGNOUT:
            return { ...state, isAuth: true };
        default:
            return state;
    }
}