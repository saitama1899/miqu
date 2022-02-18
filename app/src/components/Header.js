import { Link } from 'react-router-dom'
import { useUser } from '../hooks/useUser'
import { useContext } from 'react'
// Context
import UserContext from '../context/UserContext'

const Header = () => {

  const { user } = useContext(UserContext)
  const { handleLogOut } = useUser()

  const inlineStyles = {
    padding: 5
  }
  return (
    <header>
      <Link to="/" style={inlineStyles}>Home</Link>
      <Link to="/apuesta-gratis" style={inlineStyles}>Apuesta gratis</Link>
      {
        user
          ? <>
              <Link to="/mi-perfil" style={inlineStyles}>Mi perfil</Link>
              <Link to="/login" style={inlineStyles} onClick={() => {handleLogOut()}}>Cerrar sesión</Link>
            </>
          : <Link to="/login" style={inlineStyles}>Iniciar sesión</Link>
      }
    </header>
  )
}

export default Header