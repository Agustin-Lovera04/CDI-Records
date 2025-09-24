import { validPassword } from "../../utils/utils.js";

export class UserDAO {
  users = [
    {
      email: "agustin@gmail.com",
      password: "$2b$10$F5NVYyFocv7dJKGEsTTHzuTbJ9HJQbfBInhRi6dMfIuXnm9RGblLm",
      rol: "artista",
      name: "Agustin",
      commission: 1,
      totalIncome: 1500,
    },
  ];

  async getAllUsers() {
    return this.users;
  }

  async getUserByEmail(email) {
    try {
      const user = this.users.find((u) => u.email === email);
      return user || undefined;
    } catch (error) {
      return {
        error:
          "Error interno - Contacte a un administrador: admin@cdirecords.com",
      };
    }
  }

  async createUser(dataUser) {
    try {
      this.users.push(dataUser);

      return this.users;
    } catch (error) {
      return {
        error:
          "Error interno - Contacte a un administrador: admin@cdirecords.com",
      };
    }
  }

  async loginUser(dataUser) {
    try {
      const { email, password } = dataUser;
      const user = await this.getUserByEmail(email);
      if (!user) {
        return { error: "Credenciales invalidas" };
      }

      let passwordIsValid = validPassword(password, user.password);

      if (passwordIsValid === false) {
        return { error: "Credenciales invalidas" };
      } else {
        return user;
      }
    } catch (error) {
      return {
        error:
          "Error interno - Contacte a un administrador: admin@cdirecords.com",
      };
    }
  }
}
