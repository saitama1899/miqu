import { useContext } from 'react'
// Context
import UserContext from '../context/UserContext'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
// Paginas
import Login from '../pages/Login'
import Perfil from '../pages/Perfil'
import Apuesta from '../pages/Apuesta'
import Home from '../pages/Home'
import Registro from '../pages/Registro'
import JuegoQuiniela from '../pages/JuegoQuiniela'
// Componentes
import Header from '../components/Header/Header'

// Contenido placeholder


const AppRoutes = () => {

  // Llega null la primera vez
  const { user } = useContext(UserContext)

  return (
    <BrowserRouter>

      <Header />
      <div className='content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/apuesta-gratis' element={<Apuesta />} />
          <Route path='/login' element={<Login />} render={ <Login /> } />
          <Route path='/mi-perfil' element={<Perfil />} />
          <Route path='/registro' element={<Registro />} />
          <Route path='/quiniela' element={<JuegoQuiniela />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default AppRoutes