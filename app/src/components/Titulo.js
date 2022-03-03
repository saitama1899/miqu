const Titulo = ({titulo, subtitulo=null, mensaje=null}) => {
	return (
    <div className='flex flex-wrap justify-center mt-8 -mx-4 fade-in-quick'>
      <div className='w-full px-4'>
        <div className='text-center mx-auto mb-4 lg:mb-6 max-w-[510px]'>
          <h1>{titulo}</h1>
          { subtitulo ? 
            <span className='block text-base font-semibold'>
              {subtitulo}
            </span>          
          : '' }
          { mensaje ?      
            <p className='text-sm text-body-color'>
              {mensaje}
            </p>          
          : ''}
        </div>
      </div>
    </div>
	)
}

export default Titulo