import { UserDAO as DAO } from "../DAO/manager/user-DAO.js";

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
    return await this.DAO.loginUser(dataUser);
  }
}

export const userServiceInstance = new UserService(DAO);
