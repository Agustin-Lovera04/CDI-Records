export class UserDAO {
    users = [
    {id: 1,name: 'Agustin',email: 'agus@test.com',password: '123',totalIncome: 1200},
    {id: 2,name: 'Juan',email: 'juan@test.com',password: '1234',totalIncome: 1200},{id: 3,name: 'Pedro',email: 'Pedro@test.com',password: '12345',totalIncome: 1200}
]

    async getAllUsers(){
        return this.users
    }

    async getUserByEmail(email){
        try {
            const user = this.users.find(u => u.email === email)
            return user || undefined
        } catch (error) {
            return {error: 'Error interno - Contacte a un administrador: admin@cdirecords.com'}           
        }
    }

    async createUser(dataUser){
        try {
            this.users.push(dataUser)
            return true
        } catch (error) {
        return {error: 'Error interno - Contacte a un administrador: admin@cdirecords.com'}               
        }
    }
    /* async registerUser(dataUser) */
}