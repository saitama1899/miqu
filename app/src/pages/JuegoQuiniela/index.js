import { useQuinielas } from '../../hooks/useQuinielas'
import { useApuestas } from '../../hooks/useApuestas'
import QuinielaForm from '../../components/QuinielaForm'
import Titulo from '../../components/Titulo'
import LoadingSpinner from '../../components/LoadingSpinner'

const Apuesta = () => {

  const { quiniela, fechaLimite, loading } = useQuinielas()
  const { addApuesta } = useApuestas()
  console.log(loading);
  return (
    <>
      { !loading ?     
          quiniela ? <>
            <Titulo 
              titulo={'Juego de la Quiniela'} 
              subtitulo={`Jornada ${quiniela.jornada}ª`} 
              mensaje={`Cierre de apuestas: ${fechaLimite}`}
            />
            <QuinielaForm quiniela={quiniela} addApuesta={addApuesta} /></>
          : ''
      : <LoadingSpinner/> }
    </>
  )
}

export default Apuesta

