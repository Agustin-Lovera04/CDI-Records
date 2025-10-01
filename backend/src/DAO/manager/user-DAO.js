export class UserDAO {
  users = [
    {
      id: "agustin@gmail.com",
      nombre: "Agustin Lovera",
      password: "$2b$10$F5NVYyFocv7dJKGEsTTHzuTbJ9HJQbfBInhRi6dMfIuXnm9RGblLm",
      role: "artista",
      split: 50,
      activo: 1,  // num as bool
      medio_pago: null,
      managed: 0,   //num as bool
    },
  ];

  async getAllUsers() {
    return this.users;
  }

  async getUserByEmail(email) {
    try {
      const user = this.users.find((u) => u.id === email);
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
