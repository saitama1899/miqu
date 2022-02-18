import { Navigate } from 'react-router-dom'

import UserContext from '../../context/UserContext'
import { useContext } from 'react'
import { useApuestas } from '../../hooks/useApuestas'
import ApuestasList from '../../components/ApuestasList'

const Perfil = () => {

  const { user } = useContext(UserContext)
  const { apuestas, loading } = useApuestas()
  
  // console.log(user)

  return (
    <>
      {
        user
          ? <>
              <h1>Mi perfil ({user.name})</h1>
              <ApuestasList apuestas={apuestas} />
              { loading ? 'Cargando...' : '' }
            </>
          : <Navigate replace to="/" />
      }  
    </>
  )
}

export default Perfil