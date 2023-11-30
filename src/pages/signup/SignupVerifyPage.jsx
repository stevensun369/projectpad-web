import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {accountSignupVerify} from '../../actions/accountActions.js'

const SignupEmailPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [code, setCode] = useState('')
  const account = useSelector((state) => state.account);

  const submit = (e) => {
    e.preventDefault();
    dispatch(accountSignupVerify(account.email, code));
  }

  useEffect(() => {
    if (account.token !== '' && account.errorMessage === '') {
      navigate('/signup/basic')
    }
  }, [
    account,
    navigate
  ])

  return (
    <>
      <form onSubmit={submit} >
        <input 
          type="text" placeholder="Code"
          value={code} onChange={(e) => {setCode(e.target.value)}} />

        <input type="button" value="Send" onClick={submit} />

        <div>{account.errorMessage}</div>
      </form>
    </>
  )
}

export default SignupEmailPage