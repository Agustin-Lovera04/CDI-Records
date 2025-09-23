import express from 'express'
import { config } from './config/config.js'

const app = express()
const PORT = config.PORT

app.listen(PORT, ()=> {
    console.log(`Server online in port ${PORT}`)
})