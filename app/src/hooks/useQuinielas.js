import { useEffect, useState } from 'react'
import quinielaService from '../services/quinielas'

export const useQuinielas = () => {
  const [quiniela, setQuiniela] = useState([])

  // Get quiniela
  useEffect(() => {
    quinielaService.getQuiniela()
      .then(q => {
        setQuiniela(q)
      })
  }, [])

  return {
    quiniela
  }
}