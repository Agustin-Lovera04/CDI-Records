export class UserDAO {
    users = [
    {
        id: 1,
        name: 'Agustin',
        email: 'agus@test.com',
        totalIncome: 1200
    },
    {
        id: 2,
        name: 'Juan',
        email: 'juan@test.com',
        totalIncome: 1200
    },
    {
        id: 3,
        name: 'Pedro',
        email: 'Pedro@test.com',
        totalIncome: 1200
    }
]

    async getAllUsers(){
        return this.users
    }
}