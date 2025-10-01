import passport from "passport";
import local from "passport-local";
import passportJWT from "passport-jwt";
import { userServiceInstance } from "../services/user-service.js";
import { hashPassword, searchToken } from "../utils/utils.js";
import { config } from "./config.js";

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
          let { email, password, role, nombre, split, managed} =
            req.body; //0 si es admin

          if (
            !email ||
            !nombre ||
            !password ||
            !role ||
            !split
          ) {
            return done(null, false, {
              message: "Faltan campos obligatorios.",
            });
          }

          let exReg =
            /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
          let valid = exReg.test(email);
          if (!valid) return done(null, false, { message: "Email inválido" });

          const existUser = await userServiceInstance.getUserByEmail(email);

          if (existUser) {
            return done(null, false, {
              message:
                "Ya existen artistas registrados con el email ingresado.",
            });
          }

          password = hashPassword(password);

          const dataUser = {
            email,
            nombre,
            password,
            role,
            split,
            managed: managed || 0,
          };
          const createUser = await userServiceInstance.createUser(dataUser);

          if (createUser.error) {
            return done(null, false, {
              message: createUser.error,
            });
          }
          return done(null, createUser);
        } catch (error) {
          done(error, false);
        }
      }
    )
  );

  passport.use(
    "login",
    new local.Strategy(
      {
        usernameField: "email",
      },
      async (email, password, done) => {
        try {
          if (!email || !password) {
            return done(null, false, { message: "Faltan campos obligatorios" });
          }

          const dataUser = { email, password };

          const user = await userServiceInstance.loginUser(dataUser);

          if (user.error) {
            return done(null, false, { message: user.error });
          }

          const safeUser = { ...user };
          delete safeUser.password;

          return done(null, user);
        } catch (error) {
          done(error, false);
        }
      }
    )
  );

  passport.use('jwt', new passportJWT.Strategy(
    {
      secretOrKey: config.KEY_JWT,
      jwtFromRequest: passportJWT.ExtractJwt.fromExtractors([searchToken])
    },
    async (contentToken, done) => {
      try {
        return done(null, contentToken)
      } catch (error) {
        return done(error)
      }
    }
  ))
};
