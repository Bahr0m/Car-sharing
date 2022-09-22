import { OPEN, CLOSE } from "../actions"


const initialState = {
    isOpen: false,
}

export const OpenReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN:
            return { ...state, isOpen: true };
        case CLOSE:
            return { ...state, isOpen: false };
        default:
            return state;
    }
}