const { Schema, model } = require('mongoose')

// Usamos el unique en username para definir que sea unico
const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    match: /^(?=.{5,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
    minLength: 5,
    maxlength: 20
  },
  name: {
    type: String,
    match: /^[a-zA-Z\-]+$/,
    required: true,
    minLength: 2,
    maxlength: 25
  },
  email: {
    type: String,
    unique: true,
    match: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
    required: true,
    minLength: 5,
    maxlength: 35
  },
  passwordHash:  {
    type: String,
    required: true,
    minLength: 7,
    maxlength: 100
  },
  apuestas: [{
    type: Schema.Types.ObjectId,
    ref: 'Apuesta'
  }]
})

// Con esto modificamos los campos que devolverá la DB para mostrarlos modificados u ocultar algunos
userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v

    delete returnedObject.passwordHash
  }
})

const User = model('User', userSchema)

module.exports = User
