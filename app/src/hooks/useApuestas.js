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
    if (user) {
      setLoading(true)

      apuestaService.getApuestas(user.token)
        .then(apuestas => {
          setApuestas(apuestas)
          setLoading(false)
        })
    }
  }, [])

  const addApuesta = (apuesta) => {
    apuestaService
      .createApuesta(apuesta, user.token)
      .then(newApuesta => {
        setApuestas([...apuestas, newApuesta])
      })      
  }

  return {
    apuestas,
    addApuesta,
    loading
  }
}