import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {accountSignupBasic} from '../../actions/accountActions.js'

const SignupBasicPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [validationError, setValidationError] = useState('')

  const account = useSelector((state) => state.account);

  const submit = (e) => {
    e.preventDefault();

    if (validationError === '') {
      dispatch(
        accountSignupBasic(
          account.token,
          firstName,
          lastName,
          password
        )
      );
    }
  }

  useEffect(() => {
    if (
      validationError === '' &&
      account.firstName !== '' && 
      account.errorMessage === ''
    ) {
      navigate('/signup/basic')
    }

    if (
      firstName.length < 1 ||
      lastName.length < 1 ||
      password.length < 1
    ) {
      setValidationError('Fields cannot be empty');
    } else if (password !== confirmPassword) {
      setValidationError('Passwords must match');
    } else {
      setValidationError('');
    }

    
  }, [
    account,
    validationError,
    navigate,
    firstName,
    lastName,
    password,
    confirmPassword
  ])

  return (
    <>
      <form onSubmit={submit} >
        <input 
          type="text" placeholder="First name"
          value={firstName} onChange={(e) => {setFirstName(e.target.value)}} />

        <input 
          type="text" placeholder="Last name"
          value={lastName} onChange={(e) => {setLastName(e.target.value)}} />

        <input 
          type="text" placeholder="Password"
          value={password} onChange={(e) => {setPassword(e.target.value)}} />

        <input 
          type="text" placeholder="Confirm Password"
          value={confirmPassword} onChange={(e) => {setConfirmPassword(e.target.value)}} />


        <input type="button" value="Send" onClick={submit} />

        <div>{account.errorMessage}</div>
        <div>{validationError}</div>
      </form>
    </>
  )
}

export default SignupBasicPage