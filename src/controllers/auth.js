const { response, request } = require('express');

const createUser = (req, res) => {
  const { body } = req;

  res.json({
    ok: true,
    msg: 'Creando usuario',
    data: body,
  });
};

const renovateToken = (req = request, res = response) => {
  res.json({
    ok: true,
    msg: 'Renovando token',
  });
};

const loginUser = (req = request, res = response) => {
  const { body } = req;

  res.json({
    ok: true,
    msg: 'Login user',
    data: body,
  });
};

module.exports = {
  createUser,
  renovateToken,
  loginUser,
};
