import express from 'express'
import { config } from './config/config.js'
import { router as userRouter } from './router/user-router.js'
import { router as cluesRouter } from './router/clues-router.js'
import { router as álbumesRouter } from './router/álbumes-router.js'

const app = express()
const PORT = config.PORT

app.use('/user', userRouter)
app.use('/clues', cluesRouter)
app.use('/álbumes', álbumesRouter)

app.listen(PORT, ()=> {
    console.log(`Server online in port ${PORT}`)
})