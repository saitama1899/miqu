import MostrarQuiniela from './MostrarQuiniela'
import { useState } from 'react'

const Apuesta = ({ apuesta }) => {

  const [visible, setVisible] = useState(false)

  const fecha = new Date(apuesta.date)
  const day = ('0' + (fecha.getDate())).slice(-2)  
  const month = ('0' + (fecha.getMonth() + 1)).slice(-2)

  const resultados = () => {
    let aciertos = 0, fallos = 0
    apuesta.quiniela.partidos.forEach((partido, index) => {
      if (partido.signo) {
        let signo = partido.signo.replace(/\s/g, '')
        signo === apuesta.content[index] ? aciertos++ : fallos++       
      }
    })
    return { aciertos, fallos }
  }

  const { aciertos, fallos } = resultados()

  const toggleDetail = () => {
    setVisible(!visible)
  }

  return (
    <li 
      className='relative px-4 py-2 mb-4 border-0 border-l-4 rounded select-none text-midnight bg-slate-50 border-midnight' >
      <div onClick={toggleDetail} className='cursor-pointer select-none hover:bg-slate-100' >
        <span className='inline-block mr-5 text-xl align-middle'>
          <img src='img/quiniela-logo.png' width={35}/>
        </span>
        <span className='inline-block mr-8 align-middle'>
          <b className='mr-6 capitalize'>Quiniela - Jornada {apuesta.quiniela.jornada}</b>
          <span className='mr-6 '>Realizada el día {day}-{month}</span>
          <small>Acertados {aciertos}/{aciertos+fallos}</small>
        </span>
        <button className='absolute top-0 right-0 mt-4 mr-6 text-xl font-semibold leading-none bg-transparent outline-none focus:outline-none'>
          <span><b>+</b></span>
        </button>
      </div>
      <div className={visible ? '' : 'hidden'}>
        <MostrarQuiniela apuesta={ apuesta }/>
      </div>
    </li>
  )
}

export default Apuesta