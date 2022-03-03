import { Link } from 'react-router-dom'
import { useUser } from '../../hooks/useUser'
import { useContext, useState } from 'react'
// Context
import UserContext from '../../context/UserContext'

import LogoHeader from './LogoHeader'
import DropdownButtonMenu from './DropdownButtonMenu'

const Header = () => {

  const { user } = useContext(UserContext)
  const { handleLogOut } = useUser()

  const [visible, setVisible] = useState(true)
  const toggleVisibility = () => setVisible(!visible)
  const menuMobileVisible = visible ? 'hidden' : ''

  return (
    <header>
      <nav className='navMenu'>
        <LogoHeader />
        <DropdownButtonMenu toggleVisibility={toggleVisibility} />
        <div className={menuMobileVisible + ' w-full md:flex md:items-center md:w-auto' }>
          <ul className='menu'>
            <li><Link to='/apuesta-gratis' className='linkMenu' onClick={toggleVisibility}>Apuesta gratis</Link></li>
            { user ? <>
                <li><Link to='/mi-perfil' className='flex linkMenu' onClick={toggleVisibility}>{user.name}</Link></li>
                <li><Link to='/login' onClick={() => {handleLogOut()}} className='linkMenu'  onClick={toggleVisibility}>Cerrar sesión</Link></li>
              </>
              : <>
              <li><Link to='/login' className='linkMenu'  onClick={toggleVisibility}>Iniciar sesión</Link></li>
              <li><Link to='/registro' className='linkMenu text-coral-600'  onClick={toggleVisibility}>Registro</Link></li>
            </> }
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header