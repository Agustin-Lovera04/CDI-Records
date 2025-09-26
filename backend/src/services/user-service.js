import { UserDAO as DAO } from "../DAO/manager/user-DAO.js";
import { validPassword, genToken } from "../utils/utils.js";


class UserService {
  constructor(DAO) {
    this.DAO = new DAO();
  }

  async getAllUsers() {
    return await this.DAO.getAllUsers();
  }

  async getUserByEmail(email) {
    return await this.DAO.getUserByEmail(email);
  }

  async createUser(dataUser) {
    return await this.DAO.createUser(dataUser);
  }

  async loginUser(dataUser) {
    const user = await this.DAO.loginUser(dataUser);
    if (user?.error) {
      return user;
    }

    const passwordIsValid = validPassword(dataUser.password, user.password);
    if (!passwordIsValid) {
      return { error: "Credenciales invalidas" };
    }

    return user;
  }

  async genTokenForLogin(user){
    let token = genToken(user)
    if(!token){
      return {error: "Error interno - Contacte a un administrador: admin@cdirecords.com"}
    }

    return token
  }
}

export const userServiceInstance = new UserService(DAO);
