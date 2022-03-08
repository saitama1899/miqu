import axios from 'axios'
import  { GetAPIUrl } from '../utils/GetAPIUrl'

const baseUrl = GetAPIUrl() + '/api/quinielas/actual'

const getQuiniela = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

export default { getQuiniela }
