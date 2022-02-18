// Context
import UserContext from '../context/UserContext'
import { useContext } from 'react'

export const useUser = () => {
  const { user, setUser } = useContext(UserContext)

  const handleLogOut = () => {
    setUser(null)
    // apuestaService.setToken(user.token)
    window.sessionStorage.removeItem('loggedNoteAppUser')
  }

  // Metodo que utilizará el componente Loginform para actualizar el user
  const addUser = (u) => {
    setUser(u)
    // Guardar el login en el navegador
    // Se guarda como string ya que no admite objetos
    window.sessionStorage.setItem(
      'loggedNoteAppUser', JSON.stringify(u)
    )
    // apuestaService.setToken(u.token)
  }

  return {
    user,
    handleLogOut,
    addUser
  }
}
