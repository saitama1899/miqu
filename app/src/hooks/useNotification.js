import { useState } from 'react'

export const useNotification = () => {
  const [message, setMessage] = useState(null)

  const addNotification = (m) => {
    setMessage(m)
  }

  return {
    message,
    addNotification
  }
}