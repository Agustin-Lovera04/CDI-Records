import dotenv from 'dotenv'
import __dirname from '../../__dirname.js'

dotenv.config({
    override: true,
    path: `${__dirname}/.env`
})

export const config = {
    PORT: process.env.PORT,
    KEY_JWT: process.env.KEY_JWT,
    COOKIES_SECRET_KEY: process.env.COOKIES_SECRET_KEY,
    ALLOWED_CORS_ORIGINS: process.env.ALLOWED_CORS_ORIGINS
}