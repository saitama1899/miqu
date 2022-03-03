const Apuesta = require('../models/Apuesta')
const axios = require('axios')

const checkRequired = (checks) => {
  let result = true
  checks.forEach(check => {
    if(!check) result = false
  })
  return result
}

const checkIfClosed = (partidos) => {
  let closed = false
  partidos.forEach(partido => {
    if (new Date(partido.fecha) < new Date()) closed = true
  })
  return closed
}

module.exports = {
  checkRequired,
  checkIfClosed
}
