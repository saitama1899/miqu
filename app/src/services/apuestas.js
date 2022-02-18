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
      Authorization: token
    }
  }
  const request = axios.post(baseUrl, apuesta, config)
  return request.then(response => response.data)
}

// const updateNote = (id, newObject) => {
//   const config = {
//     headers: {
//       Authorization: token
//     }
//   }

//   const request = axios.put(`${baseUrl}/${id}`, newObject, config)
//   return request.then(response => response.data)
// }

export default { getApuestas, createApuesta }
