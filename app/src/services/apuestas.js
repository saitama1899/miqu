import axios from 'axios'
const baseUrl = '/api/apuestas'

const getApuestas = (token) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  }
  const request = axios.get(baseUrl, config)
  return request.then(response => response.data)
}

const createApuesta = (apuesta, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  const request = axios.post(baseUrl, apuesta, config)
  request.then(response => {
    return response.data    
  })

}

export default { getApuestas, createApuesta }
