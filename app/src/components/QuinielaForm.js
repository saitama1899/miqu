import { useState } from 'react'
import QuinielaRadioInput from './QuinielaRadioInput'
import Notification from './Notification'
import { useNotification } from '../hooks/useNotification'

const QuinielaForm = ({ quiniela, addApuesta }) => {
  const [apuesta, setApuesta] = useState([,])
  const [error, setError] = useState(true)
  const [apuestaRealizada, setApuestaRealizada] = useState(false)
  const { message, addNotification } = useNotification()

  const { partidos } = quiniela
  const n = 15

  const setter = (partido, value) => {
    let newValues = [...apuesta]
    newValues[partido] = value
    setApuesta(newValues)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(apuesta)
    if(!(apuesta.includes(undefined)) && apuesta.length === 15){
      const apuestaToSave = {
        content: apuesta
      }
      addApuesta(apuestaToSave)
      setError(false)
      setApuestaRealizada(true)
      addNotification('Apuesta realizada correctamente.')
    } else {
      setError(true)
      addNotification('Faltan resultados por completar.')
      setTimeout(() => {
        addNotification(null)
      }, 5000)
    }
  }

  const handleReset = (e) => {
    setApuesta([,])
  }

  return (
    <>
	  <form onSubmit={handleSubmit}>
      {
        partidos ?
          [...Array(n)].map((e, i) =>
            <div key={`Partido ${i+1}`}>
              <label>{i+1}. {partidos[i].local} - {partidos[i].visitante}</label>
              <QuinielaRadioInput signo='1' partido={i} checked={apuesta} setter={setter} />
              <QuinielaRadioInput signo='X' partido={i} checked={apuesta} setter={setter} />
              <QuinielaRadioInput signo='2' partido={i} checked={apuesta} setter={setter} />
            </div>
          )
        : ''
      }
      <button onClick={handleReset}>Reset</button>
      <button type="submit">Submit</button>
	  </form>
    { error && !apuestaRealizada
        ? <><Notification message={message} feedback='bad'/>
          <p>Marca tus 15 resultados para validar la apuesta</p>
          <p>Tienes 1 apuesta disponible</p> </>
        : <><Notification message={message}/> </> }
    </>
  )
}

export default QuinielaForm