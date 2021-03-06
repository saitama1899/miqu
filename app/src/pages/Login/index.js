import LoginForm from '../../components/Login/LoginForm'
import { useUser } from '../../hooks/useUser'
import { Navigate } from 'react-router-dom'

import UserContext from '../../context/UserContext'
import { useContext } from 'react'

const Login = () => {

  const { addUser } = useUser()
  const { user } = useContext(UserContext)
  return (
    <>
    {
      user
        ? <Navigate replace to='/mi-perfil' />
        : <LoginForm addUser={addUser} />
    }  
    </>
  )
}

export default Login