import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux'

import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

// reducers
import {
  accountReducer
} from './reducers/accountReducer'

const reducer = combineReducers({
  account: accountReducer,
})

const accountFromStorage = localStorage.getItem('account')
  ? JSON.parse(localStorage.getItem('account'))
  : null


const initialState = {}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)


export default store