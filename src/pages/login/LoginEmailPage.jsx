import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {accountLoginEmail} from '../../actions/accountLoginActions.js'

const LoginEmailPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [email, setEmail] = useState('')
  const account = useSelector((state) => state.account);

  const submit = (e) => {
    e.preventDefault();
    dispatch(accountLoginEmail(email));
  }

  useEffect(() => {
    if (account.email !== '' && account.errorMessage === '') {
      navigate('/login/verify')
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

export default LoginEmailPage