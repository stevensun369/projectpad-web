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

  ACCOUNT_LOGIN_EMAIL_REQUEST,
  ACCOUNT_LOGIN_EMAIL_SUCCESS,
  ACCOUNT_LOGIN_EMAIL_FAIL,
  
  ACCOUNT_LOGIN_VERIFY_REQUEST,
  ACCOUNT_LOGIN_VERIFY_SUCCESS,
  ACCOUNT_LOGIN_VERIFY_FAIL,

  ACCOUNT_LOGIN_PASSWORD_REQUEST,
  ACCOUNT_LOGIN_PASSWORD_SUCCESS,
  ACCOUNT_LOGIN_PASSWORD_FAIL,

  ACCOUNT_SLUG_CHECK_REQUEST,
  ACCOUNT_SLUG_CHECK_SUCCESS,
  ACCOUNT_SLUG_CHECK_FAIL,

  ACCOUNT_SLUG_CHANGE_REQUEST,
  ACCOUNT_SLUG_CHANGE_SUCCESS,
  ACCOUNT_SLUG_CHANGE_FAIL,

  ACCOUNT_CHANGE_REQUEST,
  ACCOUNT_CHANGE_SUCCESS,
  ACCOUNT_CHANGE_FAIL,
} from '../constants/accountConstants'

export const accountReducer = (state = {loading: false, errorMessage: ''}, action) => {  
  
  let account = {}
  switch (action.type) {
    // ACCOUNT SIGNUP
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
      account = {
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
        ID: account.ID,
        email: state.email,
        phone: '',
        firstName: account.firstName,
        lastName: account.lastName,
        slug: account.slug,
        links: [],
        bio: '',
        token: account.token,
      }
    case ACCOUNT_SIGNUP_BASIC_FAIL:
        return {
          ...state,
          loading: false,
          errorMessage: action.payload.message,
        }

    // ACCOUNT LOGIN
    case ACCOUNT_LOGIN_EMAIL_REQUEST: 
      return {
        ...state,
        loading: true,
        email: '',
      }
    case ACCOUNT_LOGIN_EMAIL_SUCCESS:
      return {
        ...state,
        errorMessage: '',
        loading: false,
        email: action.payload.email,
      }
    case ACCOUNT_LOGIN_EMAIL_FAIL:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload.message,
      }
    case ACCOUNT_LOGIN_VERIFY_REQUEST:
      return {
        ...state,
        loading: true,
        token: '',
      }
    case ACCOUNT_LOGIN_VERIFY_SUCCESS:
      return {
        ...state,
        loading: false,
        errorMessage: '',
        token: action.payload.token,
      }
    case ACCOUNT_LOGIN_VERIFY_FAIL:
        return {
          ...state,
          loading: false,
          errorMessage: action.payload.message,
        }

    case ACCOUNT_LOGIN_PASSWORD_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case ACCOUNT_LOGIN_PASSWORD_SUCCESS:
      account = {
        ID: action.payload.account.ID,
        email: state.email,
        phone: action.payload.account.phone,
        firstName: action.payload.account.firstName,
        lastName: action.payload.account.lastName,
        slug: action.payload.account.slug,
        links: action.payload.account.links,
        bio: action.payload.account.bio,
        token: action.payload.token,
      }

      localStorage.setItem('account', JSON.stringify(account));

      return {
        ...state,
        loading: false,
        errorMessage: '',
        ID: account.ID,
        email: state.email,
        phone: account.phone,
        firstName: account.firstName,
        lastName: account.lastName,
        slug: account.slug,
        links: account.links,
        bio: account.bio,
        token: account.token,
      }
    case ACCOUNT_LOGIN_PASSWORD_FAIL:
        return {
          ...state,
          loading: false,
          errorMessage: action.payload.message,
        }

    case ACCOUNT_SLUG_CHANGE_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case ACCOUNT_SLUG_CHANGE_SUCCESS:
      return {
        ...state,
        loading: false,
        errorMessage: '',
        slug: action.payload.account.slug,
        token: action.payload.token,
      }
    case ACCOUNT_SLUG_CHANGE_FAIL:
        return {
          ...state,
          loading: false,
          errorMessage: action.payload.message,
        }
    case ACCOUNT_SLUG_CHECK_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case ACCOUNT_SLUG_CHECK_SUCCESS:
      return {
        ...state,
        loading: false,
        errorMessage: '',
      }
    case ACCOUNT_SLUG_CHECK_FAIL:
        return {
          ...state,
          loading: false,
          errorMessage: action.payload.message,
        }

    case ACCOUNT_CHANGE_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case ACCOUNT_CHANGE_SUCCESS:
      return {
        ...state,
        loading: false,
        errorMessage: '',
        firstName: action.payload.account.firstName,
        lastName: action.payload.account.lastName,
        phone: action.payload.account.phone,
        bio: action.payload.account.bio,
        token: action.payload.token
      }
    case ACCOUNT_CHANGE_FAIL:
        return {
          ...state,
          loading: false,
          errorMessage: action.payload.message,
        }
    default:
      return state

  }
}