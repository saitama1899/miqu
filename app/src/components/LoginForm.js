// Imports
import { useState } from 'react'
import { useNavigate  } from 'react-router-dom'
// Componentes
import Notification from './Notification'
// Servicios
import { login } from '../services/users'
// Hooks
import { useNotification } from '../hooks/useNotification'

const LoginForm =  ({ addUser }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const { message, addNotification } = useNotification()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const user = await login({
        username,
        password
      })
      addUser(user)
      setUsername('')
      setPassword('')
      // navigate('/apuesta-gratis')
    } catch (error) {
      addNotification('Usuario o contraseña')
      setTimeout(() => {
        addNotification(null)
      }, 5000)
    }
  }

  return (
    <>
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type='text'
            value={username}
            name='Username'
            placeholder='Username'
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div>
          <input
            type='password'
            value={password}
            name='Password'
            placeholder='Password'
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button id='form-login-button'>Login</button>
      </form>
      <Notification message={message}></Notification>
    </>
  )
}

export default LoginForm