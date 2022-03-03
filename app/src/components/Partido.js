const Partido = ({ partido, index, apuesta }) => {
  let resultado = ''
  if (apuesta && partido.signo) {
    let signo = partido.signo.replace(/\s/g, '')
    resultado = signo === apuesta[index] ? 'acierto' : 'fallo'
  }
  return (
    <div className='even:bg-white odd:bg-red-50 mb-[4px]'>
      <label className='p-2'>
        <span className='inline-block w-4 xl:w-14'>{ index + 1 }.</span> 
        <span className='inline-block px-2 font-medium'>
          {partido.local} - {partido.visitante}</span>
      </label>
      <div className='resultados'>
        <span className="hidden md:inline">{  partido.marcador ? partido.marcador : partido.fecha }</span>
        <span>{ partido.signo }</span>
        <span className = { resultado }>{ apuesta[index] }</span>
      </div>
    </div>
  )
}

export default Partido