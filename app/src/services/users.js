import axios from 'axios'
import  { GetAPIUrl } from '../utils/GetAPIUrl'

const baseUrl = GetAPIUrl() + '/api'

export const login = async credentials => {
  const { data } = await axios.post(baseUrl+'/login', credentials)
  return data
}

export const signup = async credentials => {
  const { data } = await axios.post(baseUrl+'/users', credentials)
  return data
}
