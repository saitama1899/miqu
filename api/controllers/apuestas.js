const apuestasRouter = require('express').Router()
const Apuesta = require('../models/Apuesta')
const User = require('../models/User')
const Quiniela = require('../models/Quiniela')
const userExtractor = require('../middleware/userExtractor')
const { checkIfClosed } = require('../utils/utils')

// GET todas las apuestas de un usuario
apuestasRouter.get('/', userExtractor, async (req, res) => {
  const { userId } = req
  const apuestas = await Apuesta.find({user: userId})
    .populate('quiniela', { fecha_sorteo: 1, id_sorteo: 1, partidos: 1, jornada: 1 })
    .sort({_id: -1})
    .limit(3)
  res.json(apuestas)
})

// POST
apuestasRouter.post('/', userExtractor, async (req, res, next) => {
  const {
    content
  } = req.body

  const { userId } = req
  const user = await User.findById(userId)
  const quiniela = await Quiniela.findOne({}).sort({ _id: -1 }).limit(1)
  const apuestaExiste = await Apuesta.find({user: userId, quiniela: quiniela._id})

  if(checkIfClosed(quiniela.partidos)) {
    return res.status(400).json({
      error: 'this bet is closed'
    })
  }
  if (!content) {
    return res.status(400).json({
      error: 'required "content" field is missing'
    })
  }
  if (apuestaExiste.length) {
    return res.status(400).json({
      error: 'you already bet this game'
    })
  }

  const newApuesta = new Apuesta({
    content,
    date: new Date().toISOString(),
    quiniela: quiniela._id,
    user: user._id
  })

  try {
    const savedApuesta = await newApuesta.save()
    user.apuestas = user.apuestas.concat(savedApuesta._id)
    await user.save()

    return res.status(201).json(newApuesta)
  } catch (e) { next(e) }
})

// Apuestas por ID
apuestasRouter.get('/:id', userExtractor, async (req, res) => {
  const { id } = req.params

  try {
    const apuesta = await Apuesta.findById(id).populate('user', {
      username: 1,
      name: 1
    })
    res.json(apuesta)
  } catch (e) {
    res.status(404).end()
    console.error(e)
  }
})

module.exports = apuestasRouter
