import {applyMiddleware, combineReducers, legacy_createStore} from "redux"
import {userReducer} from "./userRedux/UserReducer"
import { userDataReducer } from "./userDataRedux/UserDataReducer"
import thunk from "redux-thunk"


let rootreducer= combineReducers({
    userReducer,
    userDataReducer
    
})

export const store = legacy_createStore(rootreducer,applyMiddleware(thunk))