import Apuesta from './Apuesta'

const ApuestasList = ({ apuestas }) => {

  return (
    <>
      <h3 className='px-4 py-2 mb-4 text-xl font-semibold text-coral-500'>Últimas apuestas realizadas</h3>
      { apuestas.length > 0  ?
        <ol> { apuestas
          .map((apuesta) => (
            <Apuesta key={apuesta.id} apuesta={apuesta} />
          ))} </ol>
      : '❌ Aún no hay apuestas asociadas a tu cuenta' }
    </>
  )
}

export default ApuestasList