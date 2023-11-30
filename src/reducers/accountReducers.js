import {
  ACCOUNT_SIGNUP_EMAIL_REQUEST,
  ACCOUNT_SIGNUP_EMAIL_SUCCESS,
  ACCOUNT_SIGNUP_EMAIL_FAIL,

  ACCOUNT_SIGNUP_VERIFY_REQUEST,
  ACCOUNT_SIGNUP_VERIFY_SUCCESS,
  ACCOUNT_SIGNUP_VERIFY_FAIL,

  ACCOUNT_SIGNUP_BASIC_REQUEST,
  ACCOUNT_SIGNUP_BASIC_SUCCESS,
  ACCOUNT_SIGNUP_BASIC_FAIL,
} from '../constants/accountConstants'

export const accountReducer = (state = {loading: false, errorMessage: ''}, action) => {  
  switch (action.type) {
    case ACCOUNT_SIGNUP_EMAIL_REQUEST: 
      return {
        ...state,
        loading: true,
        email: '',
      }
    case ACCOUNT_SIGNUP_EMAIL_SUCCESS:
      return {
        ...state,
        errorMessage: '',
        loading: false,
        email: action.payload.email,
      }
    case ACCOUNT_SIGNUP_EMAIL_FAIL:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload.message,
      }
    case ACCOUNT_SIGNUP_VERIFY_REQUEST:
      return {
        ...state,
        loading: true,
        token: '',
      }
    case ACCOUNT_SIGNUP_VERIFY_SUCCESS:
      return {
        ...state,
        loading: false,
        errorMessage: '',
        token: action.payload.token,
      }
    case ACCOUNT_SIGNUP_VERIFY_FAIL:
        return {
          ...state,
          loading: false,
          errorMessage: action.payload.message,
        }
    case ACCOUNT_SIGNUP_BASIC_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case ACCOUNT_SIGNUP_BASIC_SUCCESS:
      let account = {
        ID: action.payload.account.ID,
        email: state.email,
        phone: '',
        firstName: action.payload.account.firstName,
        lastName: action.payload.account.lastName,
        slug: action.payload.account.slug,
        links: [],
        bio: '',
        token: action.payload.token,
      }

      localStorage.setItem('account', JSON.stringify(account));

      return {
        ...state,
        loading: false,
        errorMessage: '',
        token: action.payload.token,
        ID: account.ID,
        firstName: account.firstName,
        lastName: account.lastName,
        slug: account.slug,
      }
    case ACCOUNT_SIGNUP_BASIC_FAIL:
        return {
          ...state,
          loading: false,
          errorMessage: action.payload.message,
        }
    default:
      return state

  }
}