const Home = () => {


  return (
    <div className='hero'>
      <div className='leftCol'>
        <h1>MiQu</h1>
        <p className='subtitle'>Apuesta <b>gratis</b> todas las semanas, con la posibilidad real de ganar dinero!</p>
        <p className='textoDestacado'>Descarga la app en (próximamente):</p>
        <div className='descargaApp'>
          <img src='/img/AppStore.svg' className='pr-4' />
          <img src='/img/PlayStore.svg' />
        </div>
      </div>
      <div className='rightCol'>
        <div className='explicacion'>

          <div className='seccionExplicacion'>
            <img src='/img/ad-icon.png' alt='ad-icon'/>
            <h5>El bote del premio se genera consumiendo anuncios entre todos los jugadores.</h5>
          </div>

          <div className='seccionExplicacion'>
            <h5>Ganarás créditos cuantos mas anuncios consumas, y el vote será mayor.</h5>
            <img src='/img/plus-icon.png' alt=''/>
          </div>

          <div className='seccionExplicacion'>
            <img src='/img/money-icon.png' alt=''/>
            <h5>Apuesta gratis con tus créditos y gana la posibilidad de ganar el vote generado durante la jornada.</h5>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home