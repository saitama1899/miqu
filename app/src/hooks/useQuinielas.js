import { useEffect, useState } from 'react'
import quinielaService from '../services/quinielas'
import { useLoading } from '../hooks/useLoading'

export const useQuinielas = () => {
  const [quiniela, setQuiniela] = useState([])
  const [fechaLimite, setFechaLimite] = useState('')
  const { loading, addLoading } = useLoading()

  // Get quiniela
  useEffect(() => {
    addLoading(true)
    quinielaService.getQuiniela().then(quiniela => {
      setQuiniela(quiniela)
      setFechaLimite(updateFecha(quiniela))  
      addLoading(false)    
    })
  }, [])

  const updateFecha = (quiniela) => {
    let fecha = new Date('01/01/2099')
    if (quiniela) {
      quiniela.partidos.forEach(partido => {
        if (new Date(partido.fecha) < fecha) {
          fecha =  new Date(partido.fecha)
        }
      })
      const day = ('0' + (fecha.getDate())).slice(-2)  
      const month = ('0' + (fecha.getMonth() + 1)).slice(-2)
      const year = fecha.getFullYear()
      const hours = fecha.getHours()
      fecha = day + '-' + month + '-' + year + ' a las ' + hours + 'h'
    }  
    return fecha
  }

  return {
    quiniela,
    fechaLimite,
    loading
  }
}