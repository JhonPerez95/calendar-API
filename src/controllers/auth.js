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
        uid: _id,
        name,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Por favor  comunicarse con el administrador',
    });
  }
};

const loginUser = async (req = request, res = response) => {
  const { email, password } = req.body;

  try {
    // Validator the email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        ok: false,
        msg: `El email ${email} no existe`,
      });
    }
    // Validator - Confirm password
    const validatePassword = bcrypt.compareSync(password, user.password);
    console.log(validatePassword);
    if (!validatePassword) {
      return res.status(400).json({
        ok: false,
        msg: 'Password incorrecta !!',
      });
    }

    // TODO: Generar JWT

    res.json({
      ok: true,
      msg: 'Login user',
      user: {
        uid: user._id,
        name: user.name,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Por favor  comunicarse con el administrador',
    });
  }
};

const renovateToken = (req = request, res = response) => {
  res.json({
    ok: true,
    msg: 'Renovando token',
  });
};

module.exports = {
  createUser,
  renovateToken,
  loginUser,
};
