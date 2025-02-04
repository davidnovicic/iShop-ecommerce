import { configureStore , combineReducers, applyMiddleware, compose } from '@reduxjs/toolkit'
import { thunk } from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducers } from './reducers/productReducers'

const reducer = combineReducers({
    productList: productListReducers,
})

const initialState = {}

const middleware = [thunk]

const store = configureStore({reducer: reducer}, initialState, applyMiddleware(composeWithDevTools(...middleware)))

export default store





