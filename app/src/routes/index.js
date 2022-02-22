import { useContext } from 'react'
// Context
import UserContext from '../context/UserContext'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
// Paginas
import Login from '../pages/Login'
import Perfil from '../pages/Perfil'
import Apuesta from '../pages/Apuesta'
// Componentes
import Header from '../components/Header'

// Contenido placeholder
const Home = () => <h1>Miqu</h1>


const AppRoutes = () => {

  // Llega null la primera vez
  const { user } = useContext(UserContext)

  return (
    <BrowserRouter>

      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/apuesta-gratis' element={<Apuesta />} />
        <Route path='/login' element={<Login />} render={ <Login /> } />
        <Route path='/mi-perfil' element={<Perfil />} />
      </Routes>

    </BrowserRouter>
  )
}

export default AppRoutes