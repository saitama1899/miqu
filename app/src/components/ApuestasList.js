import Apuesta from "./Apuesta"

const ApuestasList = ({ apuestas }) => {

  return (
    <>
      <h3>Últimas apuestas realizadas</h3>
      { apuestas
          ?
            <ol>
            {apuestas
              .map((apuesta) => (
                <Apuesta
                  key={apuesta.id}
                  apuesta={apuesta}
                />
              ))}
            </ol>
          : 'Aún no hay apuestas asociadas a tu cuenta' }
    </>
  )
}

export default ApuestasList