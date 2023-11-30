import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux'

import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

// reducers
import {
  accountReducer
} from './reducers/accountReducers'

const reducer = combineReducers({
  account: accountReducer,
})

const accountFromStorage = localStorage.getItem('account')
  ? JSON.parse(localStorage.getItem('account'))
  : null

let initialState = {
  account: {
    loading: false, 
    errorMessage: '',

    ID: '',
    phone: '',
    firstName: '',
    lastName: '',
    links: '',
    slug: '',
    bio: '',
    email: '', 
    token: '',
  },
}

if (accountFromStorage) {
  initialState.account = accountFromStorage
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)


export default store