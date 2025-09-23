export class UserDAO {
    users = [
    {
        id: 1,
        name: 'Agustin',
        email: 'agus@test.com'
    },
    {
        id: 2,
        name: 'Juan',
        email: 'juan@test.com'
    },
    {
        id: 3,
        name: 'Pedro',
        email: 'Pedro@test.com'
    }
]


    async getAllUsers(){
        return this.users
    }
}