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

const createApuesta = async (apuesta, token) => {
  console.log(1)
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  await axios.post(baseUrl, apuesta, config)
    .then(response => {
      console.log(2)
      return response.data    
  })

}

export default { getApuestas, createApuesta }
