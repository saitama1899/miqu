import Quiniela from "./Quiniela"

const Apuesta = ({ apuesta }) => {
  return (
    <li>
      <Quiniela apuesta={ apuesta } quiniela={ apuesta.quiniela }/>
    </li>
  )
}

export default Apuesta