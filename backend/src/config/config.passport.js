import passport from "passport";
import local from "passport-local";
import passportJWT from "passport-jwt";
import { userServiceInstance } from "../services/user-service.js";
import { hashPassword } from "../utils/utils.js";

export const initPassport = () => {
  passport.use(
    "register",
    new local.Strategy(
      {
        passReqToCallback: true,
        usernameField: "email",
      },
      async (req, username, password, done) => {
        try {
          const { email, password, rol, name, commission } = req.body; //0 si es admin

          if (!email || !password || !rol || !name || !commission) {
            return done(null, false, {
              message: "Faltan campos obligatorios.",
            });
          }

          let exReg =
            /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
          let valid = exReg.test(email);
          if (!valid) return done(null, false, { message: "Email inválido" });

          const existUser = await userServiceInstance.getUserByEmail(email);

          if (existUser === false) {
            return done(null, false, {
              message:
                "Ya existen artistas registrados con el email ingresado.",
            });
          }
          password = hashPassword(password);

          const dataUser = { email, password, rol, name, commission };

          const createUser = await userServiceInstance.createUser(dataUser);
          if (createUser) {
            return done(null, createUser);
          }
        } catch (error) {
          done(error, false);
        }
      }
    )
  );
};
