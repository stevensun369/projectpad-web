import axios from 'axios'
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
import { apiURL, axiosConfig, axiosTokenConfig } from '../env'

export const accountSignupEmail = (email) => async (dispatch) => {
  try {
    dispatch({
      type: ACCOUNT_SIGNUP_EMAIL_REQUEST,
    })

    const {data} = await axios.post(
      `${apiURL}/auth/signup/email`,
      {email: email},
      axiosConfig,
    )
    console.log(data);

    dispatch({
      type: ACCOUNT_SIGNUP_EMAIL_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ACCOUNT_SIGNUP_EMAIL_FAIL,
      payload: error.response.data 
    })
  }
}

export const accountSignupVerify = (email, code) => async (dispatch) => {
  try {
    dispatch({
      type: ACCOUNT_SIGNUP_VERIFY_REQUEST,
    })

    const {data} = await axios.post(
      `${apiURL}/auth/signup/verify`,
      {email: email, code: code},
      axiosConfig,
    )
    console.log(data);

    dispatch({
      type: ACCOUNT_SIGNUP_VERIFY_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ACCOUNT_SIGNUP_VERIFY_FAIL,
      payload: error.response.data 
    })
  }
}

export const accountSignupBasic = (token, firstName, lastName, password) => async (dispatch) => {
  try {
    dispatch({
      type: ACCOUNT_SIGNUP_BASIC_REQUEST,
    })

    const {data} = await axios.post(
      `${apiURL}/auth/signup/basic`,
      {firstName: firstName, lastName: lastName, password: password},
      axiosTokenConfig(token),
    )

    dispatch({
      type: ACCOUNT_SIGNUP_BASIC_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ACCOUNT_SIGNUP_BASIC_FAIL,
      payload: error.response.data 
    })
  }
}