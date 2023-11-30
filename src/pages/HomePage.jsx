import { useEffect } from "react";
import { useSelector } from "react-redux"
import { NavLink, useNavigate } from "react-router-dom"


const HomePage = () => {
  const navigate = useNavigate();

  const account = useSelector((state) => state.account)

  useEffect(() => {
    if (account.ID === '') {
      navigate('/login/email')
    }
  }, [
    account, navigate
  ])

  return (
    <div>
      <h1>home</h1>
      <NavLink to='/edit/profile'>profil</NavLink>
    </div>
  )
}

export default HomePage