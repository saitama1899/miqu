import Quiniela from "./Quiniela"

const Apuesta = ({ apuesta }) => {
  return (
    <li>
      Boleto: {apuesta.content}
      <Quiniela quiniela={ apuesta.quiniela }/>
    </li>
  )
}

export default Apuesta