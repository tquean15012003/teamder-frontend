import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { CourseReducer } from './Reducers/CourseReducer'
import { UserReducer } from './Reducers/UserReducer'
const rootReducer = combineReducers({
    CourseReducer,
    UserReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
