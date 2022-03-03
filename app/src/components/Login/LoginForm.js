
import { useState } from 'react'

import Notification from '../Notification'
import LoginRememberMe from './LoginRememberMe'
import LinksLogin from './LinksLogin'
import LoadingSpinner from '../LoadingSpinner'

import { login } from '../../services/users'

import { useNotification } from '../../hooks/useNotification'
import { useLoading } from '../../hooks/useLoading'

import { validateInputString } from '../../utils/inputValidation'

const LoginForm =  ({ addUser }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const { message, addNotification } = useNotification()
  const { loading, addLoading } = useLoading()

  const handleSubmit = async (e) => {
    e.preventDefault()
    addLoading(true)
    if (validateInputString(username, 'username') && validateInputString(password, 'password')) {
      try {
        const user = await login({
          username,
          password
        })
        addUser(user)
        setUsername('')
        setPassword('')
      } catch (error) {
        addNotification('Usuario o contraseña incorrecto.')
      }
    }
    else {
      addNotification('El formato de las credenciales incorrecto.')
    }
    addLoading(false)
    setTimeout(() => {
      addNotification(null)
    }, 5000)
  }

  return (
    <div className='contenedorLogin'>
      <div className='tarjetaLogin'>
        <div className='divFormLogin'>
          <h1>Iniciar Sesión</h1>
          <hr className='separadorForm' />
          <form onSubmit={handleSubmit}>
            <div className='loginField'>
              <label>Usuario</label>
              <input
                type='text'
                value={username}
                name='Username'
                placeholder='Introduce tu nombre de usuario'
                onChange={({ target }) => setUsername(target.value)}
                disabled={ loading }
                title="Tu usuario debe tener almenos 5 caracteres."
                required
              />
            </div>
            <div className='loginField'>
              <label>Contraseña</label>
              <input
                type='password'
                value={password}
                name='Password'
                placeholder='Introduce tu contraseña'
                onChange={({ target }) => setPassword(target.value)}
                disabled={ loading }
                title="Tu contraseña debe tener almenos 5 caracteres."
                required
              />
            </div>
            <LoginRememberMe/>
            <div className='loginSubmit'><button id='form-login-button' disabled={ loading }>Login</button></div>
            <LinksLogin />
          </form>
          { loading ? <LoadingSpinner /> : <Notification message={message} feedback='bad'/> }
        </div>
      </div>
    </div>
  )
}

export default LoginForm