// Imports
import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// Componentes
import Notification from '../Notification'
import LoadingSpinner from '../LoadingSpinner'
// Servicios
import { signup, login } from '../../services/users'
// Hooks
import { useNotification } from '../../hooks/useNotification'
import { useLoading } from '../../hooks/useLoading'


import { validateInputString } from '../../utils/inputValidation'
const SignUpForm =  ({ addUser }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')

  const { message, addNotification } = useNotification()
  const { loading, addLoading } = useLoading()

  const handleSubmit = async (e) => {
    e.preventDefault()
    addLoading(true)
    if (validateInputString(username, 'username') && validateInputString(password, 'password') &&
    validateInputString(name, 'name') && validateInputString(email, 'email')) {
      try {
        await signup({
          username,
          name,
          email,
          password
        })
        const user = await login({
          username,
          password
        })
        addUser(user)
        setUsername('')
        setPassword('')
        setEmail('')
        setName('')
      } catch (error) {
        addNotification('Error: ' + error)
      }
    } else {
      addNotification('El formato de las credenciales incorrecto.')
    }
    addLoading(false)
    setTimeout(() => {
      addNotification(null)
    }, 5000)
  }

  return (
    <div className='contenedorLogin'>
      <div className='tarjetaLogin lg:w-6/12'>
        <div className='divFormLogin'>
          <h1>Registro</h1>
          <hr className='separadorForm' />
          <form onSubmit={handleSubmit}>
            <div className='loginField'>
              <label>Usuario</label>
              <input
                type='text'
                value={username}
                name='Username'
                placeholder='Introduce tu nombre de usuario (de 5-20 caracteres)'
                onChange={({ target }) => setUsername(target.value)}
                disabled={ loading }
                required
              />
            </div>
            <div className='loginField'>
              <label>Nombre de pila</label>
              <input
                type='text'
                value={name}
                name='Name'
                placeholder='Introduce tu nombre (de 2-25 caracteres)'
                onChange={({ target }) => setName(target.value)}
                disabled={ loading }
                required
              />
            </div>
            <div className='loginField'>
              <label>Email</label>
              <input
                type='email'
                value={email}
                name='Email'
                placeholder='Introduce tu email'
                onChange={({ target }) => setEmail(target.value)}
                disabled={ loading }
                required
              />
            </div>
            <div className='loginField'>
              <label>Contraseña</label>
              <input
                type='password'
                value={password}
                name='Password'
                placeholder='Introduce tu contraseña (de 5-20 caracteres)'
                onChange={({ target }) => setPassword(target.value)}
                disabled={ loading }
                required
              />
            </div>
            <div className='loginSubmit'><button id='form-login-button' disabled={ loading }>Registro</button></div>
          </form>
          { loading ? <LoadingSpinner /> : <Notification message={message} feedback='bad'/> }
        </div>
      </div>
    </div>
  )
}

export default SignUpForm