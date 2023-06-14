import express from 'express'
import paymentRoutes from './routes/payment.routes.js'
import { PORT } from './config.js'
import morgan from 'morgan'
import path from 'path'

const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(paymentRoutes)


app.use(express.static(path.resolve('src/public')))

app.listen(PORT)
console.log('Server on port', PORT);