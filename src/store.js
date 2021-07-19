import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import productReducer from "./reducer/productReducers"


const store=createStore(combineReducers({productReducer}),
    composeWithDevTools(applyMiddleware(logger, thunk)))

export default store;