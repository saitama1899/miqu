const DatosDePerfil = ({user, totalApuestas}) => {
  return (
    <>
      <h2 className='px-4 py-2 mb-4 text-xl font-semibold text-midnight'>Datos de perfil</h2>
      <div className="p-2 rounded ">
        <p><b>Correo electrónico:</b> {user.email}</p><br/>
        <p><b>Nombre de usuario:</b> {user.username}</p><br/>
        <p><b>Numero total de apuestas:</b> {totalApuestas}</p><br/>
        <p><b>Tus monedas:</b> 0 💸</p><br/>
      </div>
    </>
  )
}

export default DatosDePerfil