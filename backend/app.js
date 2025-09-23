import express from 'express'
import { config } from './src/config/config.js'
import { router as userRouter } from './src/router/user-router.js'
import { router as cluesRouter } from './src/router/clues-router.js'
import { router as álbumesRouter } from './src/router/álbumes-router.js'

const app = express()
const PORT = config.PORT

app.use('/user', userRouter)
app.use('/clues', cluesRouter)
app.use('/albumes', álbumesRouter)

app.listen(PORT, ()=> {
    console.log(`Server online in port ${PORT}`)
})