import { combineReducers } from 'redux'
import nameReducer from './nameReducer'
import getpokemonsReducer from './getpokemonsReducer'
import counterReducer from './counterReducer'
import selectorReducer from './selectorReducer'
import displayReducer from './displayReducer'

export default combineReducers({
        counterReducer, 
        nameReducer,
        getpokemonsReducer,
        selectorReducer,
        displayReducer
})