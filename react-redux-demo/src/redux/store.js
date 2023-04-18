import { createStore } from 'redux'
import cakeReducer from './cake/cakeReducer'
import rootReducer from './rootReducer'


// const store = createStore(cakeReducers)
const store = createStore(rootReducer)

export default store