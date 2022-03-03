import { Navigate } from 'react-router-dom'

import UserContext from '../../context/UserContext'
import { useContext } from 'react'
import { useApuestas } from '../../hooks/useApuestas'

import ApuestasList from '../../components/ApuestasList'
import Titulo from '../../components/Titulo'
import LoadingSpinner from '../../components/LoadingSpinner'
import DatosDePerfil from '../../components/DatosDePerfil'

const Perfil = () => {

  const { user } = useContext(UserContext)
  const { apuestas, loading } = useApuestas()

  return (
    <> 
    { user ?
      <Titulo titulo={`Hola, ${user.name}!`} subtitulo={'Consulta tus apuestas y datos de perfil'} />
      : <Navigate replace to='/' /> }
    { apuestas ? 
      <>
        <div className='flex flex-col flex-wrap mx-auto md:flex-row slide-in-bottom'>
          <div className='mb-4 w-full lg:w-[74%] justify-center lg:items-start overflow-y-scroll shadow-sm bg-slate-300 bg-opacity-90 rounded h-[70vh] lg:mr-[2%] py-4 px-2 md:px-8'>
            <ApuestasList apuestas={apuestas} /> 
          </div>
          <div className='w-full lg:w-[24%] overflow-y-scroll bg-slate-400  bg-opacity-90 shadow-sm rounded h-[70vh] py-4 px-2 md:px-8'>
            <DatosDePerfil />
          </div>
        </div>
        { loading ? <LoadingSpinner /> : '' }
      </>
      : ''  }
    </>
  )
}

export default Perfil