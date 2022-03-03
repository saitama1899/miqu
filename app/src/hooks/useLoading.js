import { useState } from 'react'

export const useLoading = () => {
  const [loading, setLoading] = useState(false)

  const addLoading = (b) => {
    setLoading(b)
  }

  return {
    loading,
    addLoading
  }
}