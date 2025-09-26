import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const hashPassword = (password) => bcrypt.hashSync(password, bcrypt.genSaltSync(10))
export const validPassword = ( enteredPassword , password) => bcrypt.compareSync( enteredPassword , password)


export function searchToken(req){
    let token = null

    if(req.signedCookies.tokenCookie){
        token=req.signedCookies.tokenCookie
    }

    return token
}

export const genToken = (user) => jwt.sign({...user}, process.env.KEY_JWT, {expiresIn:"1h"})
export const validToken =(token) => jwt.verify(token, process.env.KEY_JWT);
