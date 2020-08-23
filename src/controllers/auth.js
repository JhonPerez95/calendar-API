const { response, request } = require('express');
const bcrypt = require('bcryptjs');

const User = require('../models/User');

const createUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Validator the email
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        ok: false,
        msg: `El email ${email} ya existe`,
      });
    }
    user = new User(req.body);

    // Encrypt password
    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(password, salt);

    // Save user in db
    const { _id, name } = await user.save();

    res.status(201).json({
      ok: true,
      msg: 'Usuario creado',
      user: {
        _id,
        name,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Error al  crear el usuario',
      error: error,
    });
  }
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
