import dotenv from 'dotenv'
import { env } from 'process'
import express from 'express'

dotenv.config()

const PORT = env['PORT'] ?? '3001'

const app = express()
app.use(express.json())

app.get('/', (_, res) => res.send('hi'))

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
