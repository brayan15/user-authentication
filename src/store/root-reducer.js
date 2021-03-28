import { combineReducers } from 'redux'
import local from './local/root-reducer'
import user_authentication from './app/root-reducer'

const rootReducer = combineReducers({ local, user_authentication })

export default rootReducer
