const jwt = require('jsonwebtoken');

const generarJwt = ({ uid, name }) => {
  return new Promise((resolve, reject) => {
    const payload = { uid, name };
    jwt.sign(
      payload,
      process.env.SECRET_JWT,
      {
        expiresIn: '2h',
      },
      (error, token) => {
        if (error) {
          console.log(error);
          reject('No se pudo generar el token');
        } else {
          resolve(token);
        }
      }
    );
  });
};

module.exports = {
  generarJwt,
};
