import {combineReducers} from 'redux'
import todoReducer from './todo.reducer'
import authReducer from "./auth.reducer";



export default combineReducers({
    todo: todoReducer,
    auth: authReducer,
})