import axios from 'axios'
import {
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
import { apiURL, axiosTokenConfig } from '../env'

export const checkSlug = (token, slug) => async (dispatch) => {
  try {
    dispatch({
      type: ACCOUNT_SLUG_CHECK_REQUEST,
    })

    const {data} = await axios.get(
      `${apiURL}/account/slug/${slug}`,
      axiosTokenConfig(token),
    )

    dispatch({
      type: ACCOUNT_SLUG_CHECK_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ACCOUNT_SLUG_CHECK_FAIL,
      payload: error.response.data 
    })
  }
}

export const changeSlug = (token, slug) => async (dispatch) => {
  try {
    dispatch({
      type: ACCOUNT_SLUG_CHANGE_REQUEST,
    })

    const {data} = await axios.patch(
      `${apiURL}/account/slug`,
      {slug: slug},
      axiosTokenConfig(token),
    )

    dispatch({
      type: ACCOUNT_SLUG_CHANGE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ACCOUNT_SLUG_CHANGE_FAIL,
      payload: error.response.data 
    })
  }
}

export const changeAccount = (token, firstName, lastName, phone, bio) => async (dispatch) => {
  try {
    dispatch({
      type: ACCOUNT_CHANGE_REQUEST,
    })

    const {data} = await axios.put(
      `${apiURL}/account/`,
      {
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        bio: bio,
      },
      axiosTokenConfig(token),
    )

    dispatch({
      type: ACCOUNT_CHANGE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ACCOUNT_CHANGE_FAIL,
      payload: error.response.data 
    })
  }
}