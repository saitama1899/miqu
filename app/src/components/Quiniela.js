import Partido from "./Partido";

const Quiniela = ({ quiniela, apuesta = null }) => {
  const { partidos } = quiniela
  const apuestaRealizada = apuesta ? apuesta.content : null

  return (
    <div>
      { partidos
          ? <table><tbody>
              {partidos.map((partido, i) => (
                <Partido 
                  key={partido.local+partido.visitante} 
                  partido={partido}
                  apuesta={apuestaRealizada}
                  index={i} />
              ))}
            </tbody></table>
          : 'Cargando...' }
    </div>
  )
}

export default Quiniela