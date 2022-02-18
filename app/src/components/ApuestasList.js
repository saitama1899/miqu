import Apuesta from "./Apuesta"

const ApuestasList = ({ apuestas }) => {

  return (
    <>
      <h3>Últimas apuestas realizadas</h3>
      <ul>
        {apuestas
          .map((apuesta) => (
            <Apuesta
              key={apuesta.id}
              apuesta={apuesta}
            />
          ))}
      </ul>
    </>
  )
}

export default ApuestasList