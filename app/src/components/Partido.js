const Partido = ({ partido, index, apuesta = null }) => {
  let resultado = ''
  if (apuesta) {
    resultado = partido.signo === apuesta[index] ? 'acierto' : 'fallo'
  }
  return (
    <tr>
      <td>{index + 1}.</td>
      <td>
        <span>{ partido.local }</span> - <span>{ partido.visitante }</span>
      </td>
      <td>
        <span>{ partido.marcador }</span>
      </td>
      <td>
        <span>{ partido.signo }</span>
      </td>
      { apuesta
          ? <td><span className={resultado}>{ apuesta[index] }</span></td>
          : <></> }
    </tr>
  )
}

export default Partido