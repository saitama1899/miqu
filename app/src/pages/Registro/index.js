import SignUpForm from '../../components/Registro/SignUpForm'
import { useUser } from '../../hooks/useUser'
import { Navigate } from 'react-router-dom'

import UserContext from '../../context/UserContext'
import { useContext } from 'react'

const Registro = () => {

  const { addUser } = useUser()
  const { user } = useContext(UserContext)
  return (
    <>
    {
      user
        ? <Navigate replace to='/apuesta-gratis' />
        : <SignUpForm addUser={addUser} />
    }  
    </>
  )
}

export default Registro