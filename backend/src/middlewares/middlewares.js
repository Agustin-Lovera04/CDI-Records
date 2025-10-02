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
                info.message = 'Sesión expirada - Inicia sesión nuevamente.'
            }
            if(info.message === 'No auth token'){
                info.message = 'Debes iniciar sesión.'
            }
            if(info.message === 'Missing credentials'){
                info.message = 'Debes enviar todos los campos requeridos correctamente.'
            }
            return res.status(401).json({
                error: info?.message || 'No autorizado'
            });
        }

      req.user = user;
      return next();
    })(req, res, next);
  };


export const accessControl = (access = []) => function(req,res,next){
  access = access.map(permission => permission.toLowerCase())
  
  if(access.includes("public")){
    return next()
  }

  if(!access.includes(req.user.role.toLowerCase())){
    res.setHeader('Content-Type','application/json');
    return res.status(404).json({error: `Acceso denegado - '${req.user.role}' no puede realizar esta acción.`});
  }
  next()
}