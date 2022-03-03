import Partido from "./Partido";
import LoadingSpinner from './LoadingSpinner'

const Quiniela = ({ apuesta }) => {
  const { partidos } = apuesta.quiniela

  return (
    <div>
      { partidos ? <div className='w-full md:w-[75%] my-6 bg-white p-2'>
          {partidos.map((partido, i) => (
            <Partido 
              key={partido.local+partido.visitante} 
              partido={partido}
              apuesta={apuesta.content}
              index={i} />
          ))}
        </div>
      : <LoadingSpinner /> }
    </div>
  )
}

export default Quiniela