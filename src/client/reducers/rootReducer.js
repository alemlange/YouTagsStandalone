import { combineReducers } from 'redux'
import stepsReducer from "./stepsReducer"
import tagFinderReducer from "./tagFinderReducer"

export const rootReducer = combineReducers({
    steps: stepsReducer,
    tagFinder: tagFinderReducer,
})