const express = require('express');
const { check } = require('express-validator');

const { createUser, renovateToken, loginUser } = require('../controllers/auth');
const { validateFields } = require('../middlewares/validateFields');
const { validateJwt } = require('../middlewares/validateJwt');

const router = express.Router();

router.get('/api/auth/renew', validateJwt, renovateToken);

router.post(
  '/api/auth/new',
  [
    // Middlewares
    check('name', 'El name es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password debe ser minimo de 6 caracteres').isLength({
      min: 6,
    }),
    validateFields,
  ],
  createUser
);
router.post(
  '/api/auth/',
  [
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password debe ser minimo de 6 caracteres').isLength({
      min: 6,
    }),
    validateFields,
  ],
  loginUser
);

module.exports = router;
