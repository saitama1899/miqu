const axios = require('axios')

const apiGetQuiniela = 'https://www.loteriasyapuestas.es/servicios/fechav3'
const apiGetNext = 'https://www.loteriasyapuestas.es/servicios/proximosv3'

const sendGetRequest = async (date) => {
  const params = {
    game_id: 'LAQU',
    fecha_sorteo: date
  }
  try {
    const res = await axios.get(apiGetQuiniela, { params })
    return res.data
  } catch (err) { console.error(err) }
}

const getDateString = (date) => {
  const month = ('0' + (date.getMonth() + 1)).slice(-2)
  const year = date.getFullYear()
  const day = ('0' + (date.getDate())).slice(-2)
  return year + month + day
}

const getLastQuiniela = async (date) => {
  const params = {
    game_id: 'LAQU',
    num: 1,
    c: date
  }
  try {
    const next = await axios.get(apiGetNext, { params })
    const fechaNext = next.data[0].fecha
    const fechaDef = fechaNext.split(' ')
    const res = await sendGetRequest(fechaDef[0].replaceAll('-', ''))
    if (res[0].fecha_sorteo) {
      return res[0]
    }
  } catch (err) { console.error(err) }
}

module.exports = {
  getLastQuiniela,
  sendGetRequest,
  getDateString
}
