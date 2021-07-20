import { createStore, applyMiddleware, combineReducers } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import {productReducer} from "./reducer/productReducers"


const initialState={}

const store=createStore(combineReducers({products:productReducer}),
initialState, 
    applyMiddleware(logger, thunk))

export default store;