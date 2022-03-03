const quinielasRouter = require('express').Router()
const Quiniela = require('../models/Quiniela')

quinielasRouter.get('/actual', async (req, res) => {
  try {
    const quinielas = await Quiniela.findOne({}).sort({_id: -1}).limit(1)
    res.json(quinielas)
  } catch (e) { console.error(e) }
})

quinielasRouter.get('/', async (req, res) => {
  try {
    const quinielas = await Quiniela.find({})
    res.json(quinielas)
  } catch (e) { console.error(e) }
})

quinielasRouter.post('/', async (req, res, next) => {
  const { body } = req
  const { p, quiniela } = body
  if (p === process.env.SECRET) {
    try {
      const quinielaToSave = new Quiniela(quiniela)
      const savedQuiniela = await quinielaToSave.save()
      res.status(201).json(savedQuiniela)
    } catch (e) {
      console.error(e)
      res.status(400)
      next(e)
    }
  } else {
    res.json({error: 'clave incorrecta'})
    res.status(400).end()
  }
})

quinielasRouter.put('/:id', async (req, res, next) => {
  const { id } = req.params
  const { body } = req
  const { p, quiniela } = body

  if (p === process.env.SECRET) {
    try {
      await Quiniela.findByIdAndUpdate(id, quiniela, { new: true })
      res.json(quiniela)
      res.status(200).end()
    } catch (e) { next(e) }
  } else {
    res.json({error: 'clave incorrecta'})
    res.status(400).end()
  }
})

module.exports = quinielasRouter
