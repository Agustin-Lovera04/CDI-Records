import passport from "passport";

export const passportCall = (strategy) =>
  function (req, res, next) {
    passport.authenticate(strategy, function (err, user, info) {
      if (err) {
        return res.status(401).json({
          error: err.message || "Error de autenticación",
        });
      }
        if (!user) {
            if(info.message === 'jwt expired'){
                info.message = 'Sesion expirada - Inicia sesion nuevamente'
            }
            if(info.message === 'No auth token'){
                info.message = 'Debes iniciar sesion'
            }
            return res.status(401).json({
                error: info?.message || 'No autorizado'
            });
        }

      req.user = user;
      return next();
    })(req, res, next);
  };
