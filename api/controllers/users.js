const usersRouter = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')
const { checkRequired } = require('../utils/utils')

usersRouter.get('/', async (req, res) => {
  try {
    const users = await User.find({})
    res.json(users)
  } catch (e) { console.error(e) }
})

usersRouter.post('/', async (req, res) => {
  const { body } = req
  const { username, name, email, password } = body

  if (checkRequired([username, name, password, email])) {

    if (username.length > 20 || password.length > 20 || name.length > 25 || email.length > 35) {
      return res.status(400).json({
        error: 'invalid credentials length'
      })
    }

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(password, saltRounds)

    const user = new User({
      username,
      name,
      email,
      passwordHash
    })
    try {
      const savedUser = await user.save()
      res.status(201).json(savedUser)
    } catch (e) { 
      console.log(e);
      res.status(400).json(e) 
    }    
  }
})

module.exports = usersRouter
