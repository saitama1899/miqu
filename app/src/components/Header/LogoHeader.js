import { Link } from 'react-router-dom'

const LogoHeader = () => {
  return (
    <Link to='/' className='flex' >
      <img className='h-12 mr-3 md:h-16' src='/img/logo-simple-color.svg' />
      {/* <span className='textLogo'>MiQu</span> */}
    </Link>
  )
}

export default LogoHeader