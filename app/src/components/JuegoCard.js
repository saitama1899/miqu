import { Link } from 'react-router-dom'

const JuegoCard = ({titulo, mensaje, miniatura, url}) => {
  return (
    <Link to={url} className='w-full px-4 mb-5 sm:w-1/2 md:w-1/3 lg:w-1/4'>
      <div className='max-w-[370px] mx-auto mb-2' >
        <h2 className='inline-block mb-2 text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl text-coral-500 hover:text-primary'>
          {titulo}
        </h2>
        <div className='relative group hover:scale-[102.5%] duration-300'>
          <div className='mb-2 overflow-hidden rounded drop-shadow-md '>
            <img src={miniatura} alt='image' className='w-full' />
          </div>
          <div 
            className='absolute z-10 flex items-end justify-center px-16 pb-1 text-xl font-semibold duration-300 -translate-x-1/2 -translate-y-1/2 rounded opacity-0 group-hover:opacity-100 top-1/2 left-1/2 bg-midnight text-silver'>Jugar
          </div>
        </div> 
        <div>
          <p className='text-base text-body-color'>
            {mensaje}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default JuegoCard