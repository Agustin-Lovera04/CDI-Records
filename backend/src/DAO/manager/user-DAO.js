export class UserDAO {
  users = [
    {
      email: "agustin@gmail.com",
      password: "$2b$10$F5NVYyFocv7dJKGEsTTHzuTbJ9HJQbfBInhRi6dMfIuXnm9RGblLm",
      role: "premium",
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
      const { email } = dataUser;
      const user = await this.getUserByEmail(email);
      if (!user) {
        return { error: "Credenciales invalidas" };
      }
      return user;
    } catch (error) {
      return {
        error:
          "Error interno - Contacte a un administrador: admin@cdirecords.com",
      };
    }
  }
}
