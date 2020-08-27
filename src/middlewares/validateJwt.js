const jwt = require('jsonwebtoken');

const validateJwt = (req, res, next) => {
  // x-token headers
  const token = req.header('x-token');

  if (!token) {
    return res.status(401).json({
      ok: false,
      msg: 'Usuario no esta logueado',
    });
  }
  try {
    const { uid, name } = jwt.verify(token, process.env.SECRET_JWT);

    const user = {
      uid,
      name,
    };
    req.user = user;
  } catch (error) {
    return res.status(401).json({
      ok: false,
      msg: 'token no valido',
    });
  }

  next();
};

module.exports = {
  validateJwt,
};
