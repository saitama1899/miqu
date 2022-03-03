// Para poder leer las variables de entorno del .env
require('dotenv').config()

// Conexion a DB
require('./mongo')

const cors = require('cors')
const express = require('express')

// Middlewares
const logger = require('./middleware/logger')
const handleErrors = require('./middleware/handleErrors')
const notFound = require('./middleware/notFound')
require('./middleware/quinielaUpdater')

// Controladores
const usersRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')
const quinielasRouter = require('./controllers/quinielas')
const apuestasRouter = require('./controllers/apuestas')

const app = express()
// CORS por defecto permitirá que tu api funcione para cualquier origen
app.use(cors())

// Parsear las request que vengan en formato json
app.use(express.json())

app.use(logger)

// Para servir nuestra app (frontend) desde la api (servidor backend)
app.use(express.static('../app/build'))

// Para el deploy refresh
// if (NODE_ENV === 'production') {
  app.get("/", function (request, response) {
    response.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
// }
app.use('/api/users', usersRouter)
app.use('/api/login', loginRouter)
app.use('/api/quinielas', quinielasRouter)
app.use('/api/apuestas', apuestasRouter)

// Aqui solo llegará si no entra en ninguna de las de arriba
app.use(notFound)
app.use(handleErrors)



const PORT = process.env.PORT
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

// Exports para los tests
module.exports = { app, server }
