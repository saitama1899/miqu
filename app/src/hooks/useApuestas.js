import { useEffect, useState } from 'react'
import apuestaService from '../services/apuestas'
// import { useErrorMessage } from './useErrorMessage'
import { useContext } from 'react'
// Context
import UserContext from '../context/UserContext'

export const useApuestas = () => {
  const [apuestas, setApuestas] = useState([])
  const [loading, setLoading] = useState(false)
  const { user } = useContext(UserContext)

  // Get apuestas del usuario
  useEffect(() => {
    setLoading(true)

    apuestaService.getApuestas(user.token)
      .then(apuestas => {
        setApuestas(apuestas)
        setLoading(false)
      })
  }, [])

  // Metodo que utilizará el componente formNote para actualizar el state de notas
  const addApuesta = (apuesta) => {
    apuestaService
      .createApuesta(apuesta)
      .then(newApuesta => {
        setApuestas([...apuestas, newApuesta])
      })
  }

  // const toggleImportanceOf = (id) => {
  //   const note = notes.find(n => n.id === id)
  //   const changedNote = { ...note, important: !note.important }
  //   return noteService
  //     .updateNote(id, changedNote)
  //     .then(returnedNote => {
  //       console.log(returnedNote)
  //       setNotes(notes.map(note => note.id !== id ? note : returnedNote))
  //     })
  //     .catch(error => {
  //       addErrorMessage(
  //         `Note '${note.content}' was already removed from server`
  //       )
  //       console.log(error)
  //       setTimeout(() => {
  //         addErrorMessage(null)
  //       }, 5000)
  //     })
  // }

  return {
    apuestas,
    addApuesta,
    loading
  }
}

  // Fetch: Recuperar datos de internet a partir de una dirección, devuelve una promesa. Se ejecuta de forma asincrona.
  // Asincrona: Tu aplicación se renderiza antes de que pueda terminar de ejecutarse esta promesa.
  // Promesa: Es un objeto que guarda un valor futuro. Las promesas se van resolviendo en el then
  // UseEffect: Se utiliza para que al hacer un fetch, se actualiza el estado, y vuelve renderizarse, no se vuelva a ejecutar el fetch
  // y evitar asi un render infinito. Tienes que indicarle como segundo parametro, cuantas veces quieres que se ejecute (una vez = []).
  // Dentro de este parametro, se le puede indicar un state. Entonces se ejecutará cada vez que el estado cambie.
  // React pasa de largo y va renderizando todo lo que pueda, aunque la promesa del fetch tarde en devolver un valor