import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {accountLoginPassword} from '../../actions/accountLoginActions.js'

const SignupBasicPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [password, setPassword] = useState('')

  const account = useSelector((state) => state.account);

  const submit = (e) => {
    e.preventDefault();

    dispatch(
      accountLoginPassword(
        account.token,
        password
      )
    );
  }

  useEffect(() => {
    if (
      account.firstName !== '' && 
      account.errorMessage === ''
    ) {
      navigate('/')
    }    
  }, [
    account,
    navigate,
  ])

  return (
    <>
      <form onSubmit={submit} >
        
        <input 
          type="text" placeholder="Password"
          value={password} onChange={(e) => {setPassword(e.target.value)}} />

        <input type="button" value="Send" onClick={submit} />

        <div>{account.errorMessage}</div>
      </form>
    </>
  )
}

export default SignupBasicPage