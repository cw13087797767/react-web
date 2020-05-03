import {
    createStore,
    combineReducers
} from 'redux'
import homeReducer from '../reducer/home'
import userReducer from '../reducer/user'
export default createStore(
    combineReducers({
        homeReducer,
        userReducer
    })
)