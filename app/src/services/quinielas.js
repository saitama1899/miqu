import axios from 'axios'
const baseUrl = '/api/quinielas/actual'

const getQuiniela = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

export default { getQuiniela }
