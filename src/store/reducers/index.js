import { combineReducers } from "redux";
import { loginReducer } from "./login";
import {OpenReducer} from './open';
import {fetchReducer} from './fetch'

export const reducers = combineReducers({
    login: loginReducer,
    open: OpenReducer,
    fetch:fetchReducer,
})