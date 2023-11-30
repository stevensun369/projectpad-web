import { useEffect } from "react";
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"


const EditHomePage = () => {
  const navigate = useNavigate();

  const account = useSelector((state) => state.account)

  useEffect(() => {
    if (account.ID === '') {
      navigate('/signup/email')
    }
  }, [
    account, navigate
  ])

  return (
    <div>
      <h1>edit</h1>
    </div>
  )
}

export default EditHomePage