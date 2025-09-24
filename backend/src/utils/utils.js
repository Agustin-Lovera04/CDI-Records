import bcrypt from 'bcrypt'

export const hashPassword = (password) => bcrypt.hashSync(password, bcrypt.genSaltSync(10))
export const validPassword = ( enteredPassword , password) => bcrypt.compareSync( enteredPassword , password)
