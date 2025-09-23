import dotenv from 'dotenv'
import __dirname from '../../__dirname.js'

dotenv.config({
    override: true,
    path: `${__dirname}/.env`
})

export const config = {
    PORT: process.env.PORT
}