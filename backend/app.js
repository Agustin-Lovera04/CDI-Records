import express from 'express'
import passport from 'passport'
import cors from 'cors'
import cookieParser from 'cookie-parser'

import { config } from './src/config/config.js'
import { router as userRouter } from './src/router/user-router.js'
import { router as cluesRouter } from './src/router/clues-router.js'
import { router as álbumesRouter } from './src/router/álbumes-router.js'
import { initPassport } from './src/config/config.passport.js'

const app = express()
const PORT = config.PORT

initPassport()
app.use(passport.initialize())

app.use(cookieParser(config.COOKIES_SECRET_KEY))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true
}

app.use(cors(corsOptions))

app.use('/user', userRouter)
app.use('/clues', cluesRouter)
app.use('/albumes', álbumesRouter)

app.listen(PORT, ()=> {
    console.log(`Server online in port ${PORT}`)
})