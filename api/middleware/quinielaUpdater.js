const { getLastQuiniela, sendGetRequest, getDateString } = require('../middleware/quinielaApuestas')

const Quiniela = require('../models/Quiniela')
const axios = require('axios')

const { LOCAL_URL, PROD_URL, NODE_ENV, PORT } = process.env

const reqUrl = NODE_ENV === 'development'
  ? LOCAL_URL + `:${PORT}`
  : PROD_URL

const quinielaUpdate = async () => {
  try {
    const quiniela = await getLastQuiniela(new Date())
    const buscarQuiniela = await Quiniela.findOne({ id_sorteo: quiniela.id_sorteo })
    if (buscarQuiniela) {
      await axios.put(`${reqUrl}/api/quinielas/${buscarQuiniela._id}`, { p: process.env.SECRET, quiniela })
    } else {
      await axios.post(`${reqUrl}/api/quinielas`, { p: process.env.SECRET, quiniela })
    }
  } catch (e) { console.error(e.response.data.error) }
}

const updateResultados = async () => {
  try {
    const quinielas = await Quiniela.find({}).sort({ _id: -1 }).limit(2)
    const fecha = getDateString(quinielas[1].fecha_sorteo)
    const quinielaUpdated = await sendGetRequest(fecha)
    if (quinielaUpdated[0]) {
      await axios.put(`${reqUrl}/api/quinielas/${quinielas[1]._id}`, { p: process.env.SECRET, quiniela: quinielaUpdated[0] })
      console.log('Resultados actualizados para la quiniela ' + quinielas[1]._id + ' de jornada ' + quinielas[1].jornada)
    }
  } catch(e) { console.error(e.response.data.error) }
}
setInterval(() => {
  quinielaUpdate()
  updateResultados()
}, 3600 * 500)
