import Titulo from '../../components/Titulo'
import JuegoCard from '../../components/JuegoCard'
const Apuesta = () => {
  return (
    <>
      <Titulo titulo={'Apuesta gratis'} subtitulo={'Sin correr riesgos'} />
      <div className='flex flex-wrap -mx-4 slide-in-bottom'>
        <JuegoCard 
          titulo={'La quiniela'} 
          mensaje={'La quiniela de toda la vida, pero gratis!'} 
          miniatura={'img/min-quiniela.png'}
          url={'/quiniela'} />
        <JuegoCard 
          titulo={'Próximamente...'} 
          mensaje={'Pronto se uniran a la colección una amplia variedad de juegos.'} 
          miniatura={'img/min-soon.png'}
          url={'#'} />
      </div>
    </>
  )
}

export default Apuesta