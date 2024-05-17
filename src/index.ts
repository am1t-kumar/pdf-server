import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import cors from 'cors'
import dotenv from 'dotenv'
import Logger from './libs/logger.util'
import pdfRoutes from './routes/pdfRoutes'
import { END_POINT } from './types/shared.interface'

dotenv.config()
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(helmet())
app.use(morgan('combined'))

app.get(END_POINT.BASE_URL, (_req, res) => {
  res.send('Hello World!')
})

app.use(END_POINT.BASE_URL, pdfRoutes)

const port = process.env.PORT

app.listen(port, () => {
  Logger.info(`Server is running on http://localhost:${port}`)
})
