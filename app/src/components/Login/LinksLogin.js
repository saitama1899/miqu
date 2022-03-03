import { Link } from 'react-router-dom'

const LinksLogin = () => {
  return (
    <div className='flex flex-wrap mt-6'>
      <Link to='#' className='w-1/2 text-gray-700'><small>Has olvidado la contraseña?</small></Link>
      <Link to='/registro' className='w-1/2 text-right text-gray-700'><small><b>Crear nueva cuenta</b></small></Link>
    </div>
  )
}

export default LinksLogin