import axios from 'axios'
import {
  ACCOUNT_LOGIN_EMAIL_REQUEST,
  ACCOUNT_LOGIN_EMAIL_SUCCESS,
  ACCOUNT_LOGIN_EMAIL_FAIL,

  ACCOUNT_LOGIN_VERIFY_REQUEST,
  ACCOUNT_LOGIN_VERIFY_SUCCESS,
  ACCOUNT_LOGIN_VERIFY_FAIL,

  ACCOUNT_LOGIN_PASSWORD_REQUEST,
  ACCOUNT_LOGIN_PASSWORD_SUCCESS,
  ACCOUNT_LOGIN_PASSWORD_FAIL,
} from '../constants/accountConstants'
import { apiURL, axiosConfig, axiosTokenConfig } from '../env'

export const accountLoginEmail = (email) => async (dispatch) => {
  try {
    dispatch({
      type: ACCOUNT_LOGIN_EMAIL_REQUEST,
    })

    const {data} = await axios.post(
      `${apiURL}/auth/login/email`,
      {email: email},
      axiosConfig,
    )
    console.log(data);

    dispatch({
      type: ACCOUNT_LOGIN_EMAIL_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ACCOUNT_LOGIN_EMAIL_FAIL,
      payload: error.response.data 
    })
  }
}

export const accountLoginVerify = (email, code) => async (dispatch) => {
  try {
    dispatch({
      type: ACCOUNT_LOGIN_VERIFY_REQUEST,
    })

    const {data} = await axios.post(
      `${apiURL}/auth/login/verify`,
      {email: email, code: code},
      axiosConfig,
    )
    console.log(data);

    dispatch({
      type: ACCOUNT_LOGIN_VERIFY_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ACCOUNT_LOGIN_VERIFY_FAIL,
      payload: error.response.data 
    })
  }
}

export const accountLoginPassword = (token, password) => async (dispatch) => {
  try {
    dispatch({
      type: ACCOUNT_LOGIN_PASSWORD_REQUEST,
    })

    const {data} = await axios.post(
      `${apiURL}/auth/login/password`,
      {password: password},
      axiosTokenConfig(token),
    )

    dispatch({
      type: ACCOUNT_LOGIN_PASSWORD_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ACCOUNT_LOGIN_PASSWORD_FAIL,
      payload: error.response.data 
    })
  }
}