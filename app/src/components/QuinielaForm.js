import { useContext, useState } from 'react'
import QuinielaRadioInput from './QuinielaRadioInput'
import Notification from './Notification'
import { useNotification } from '../hooks/useNotification'
import UserContext from '../context/UserContext'
import { useNavigate  } from 'react-router-dom'

const QuinielaForm = ({ quiniela, addApuesta }) => {
  const [apuesta, setApuesta] = useState([,])
  const [error, setError] = useState(true)
  const [apuestaRealizada, setApuestaRealizada] = useState(false)
  const { message, addNotification } = useNotification()
  const navigate = useNavigate ()
  const { user } = useContext(UserContext)

  const { partidos } = quiniela
  const n = 15
  
  const setter = (partido, value) => {
    let newValues = [...apuesta]
    newValues[partido] = value
    setApuesta(newValues)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (user) {
      if(!(apuesta.includes(undefined)) && apuesta.length === 15){
        try {
          const apuestaToSave = {
            content: apuesta
          }
          await addApuesta(apuestaToSave)
          setError(false)
          setApuestaRealizada(true)
          addNotification('Apuesta realizada correctamente.')          
        } catch (e) {
          setError(true)
          setApuestaRealizada(false)
          addNotification('No se ha podido realizar la apuesta.')
        }
      } else {
        setError(true)
        addNotification('Faltan resultados por completar.')
        setTimeout(() => {
          addNotification(null)
        }, 5000)
      }      
    } else {
      navigate('/login')
    }
  }

  const handleReset = (e) => {
    setApuesta([,])
  }

  return (
    <>
    { partidos ? 
      <div className='max-w-2xl m-auto text-xs shadow-sm slide-in-bottom md:text-sm lg:text-base'>
        <div className='p-4 bg-white rounded'>
          <form onSubmit={handleSubmit}>
            {[...Array(n)].map((e, i) =>
              <div key={`Partido ${i+1}`} className='even:bg-white odd:bg-red-50 mb-[4px]'>
                <label className='p-2'>
                  <span className='inline-block w-4 md:w-14'>{i+1}.</span> 
                  <span className='inline-block px-2 font-medium md:border md:w-80 w-fit rounded-xl'>
                    {partidos[i].local} - {partidos[i].visitante}</span>
                </label>
                <div className='float-right'>
                  <QuinielaRadioInput signo='1' partido={i} checked={apuesta} setter={setter} />
                  <QuinielaRadioInput signo='X' partido={i} checked={apuesta} setter={setter} />
                  <QuinielaRadioInput signo='2' partido={i} checked={apuesta} setter={setter} />
                </div>
              </div>
            )}
            <div className='flex flex-wrap justify-between'>
              <button type='submit' 
                className='botonApostar' >Apostar</button>
              <button onClick={handleReset}>Reiniciar</button>
            </div>
          </form>

        </div>
        <div>
          { error && !apuestaRealizada
            ? <Notification message={message} feedback='bad'/>
            : <Notification message={message}/> }
          { !user
            ?  <Notification message={'No puedes hacer apuestas sin estar registrado'} feedback='bad'/>
            : ''}
        </div>
      </div>
    : ''}
    </>
  )
}

export default QuinielaForm