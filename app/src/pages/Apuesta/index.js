import UserContext from '../../context/UserContext'
import { useContext } from 'react'
import { useQuinielas } from '../../hooks/useQuinielas'
import { useApuestas } from '../../hooks/useApuestas'
import Quiniela from '../../components/Quiniela'
import QuinielaForm from '../../components/QuinielaForm'
const Apuesta = () => {

  const { user } = useContext(UserContext)
  const { quiniela } = useQuinielas()
  const { addApuesta } = useApuestas()
  console.log(quiniela);
  return (
    <>
      <h1>Apuesta gratis</h1>
      { user
          ? <QuinielaForm quiniela={quiniela} addApuesta={addApuesta} />
          : <Quiniela quiniela={quiniela} /> }

    </>
  )
}

export default Apuesta