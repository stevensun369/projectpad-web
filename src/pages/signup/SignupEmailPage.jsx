import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {accountSignupEmail} from '../../actions/accountSignupActions.js.js'

const SignupEmailPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [email, setEmail] = useState('')
  const account = useSelector((state) => state.account);

  const submit = (e) => {
    e.preventDefault();
    dispatch(accountSignupEmail(email));
  }

  useEffect(() => {
    if (account.email !== '' && account.errorMessage === '') {
      navigate('/signup/verify')
    }
  }, [
    account,
    navigate
  ])

  return (
    <>
      <form onSubmit={submit} >
        <input 
          type="text" placeholder="Email"
          value={email} onChange={(e) => {setEmail(e.target.value)}} />

        <input type="button" value="Send" onClick={submit} />

        <div>{account.errorMessage}</div>
      </form>
    </>
  )
}

export default SignupEmailPage