const { Router } = require('express');
const { check } = require('express-validator');

const {
  findEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} = require('../controllers/events');
const { validateJwt } = require('../middlewares/validateJwt');
const { validateFields } = require('../middlewares/validateFields');
const { isDate } = require('../helpers/isDate');

const router = Router();

// Aplicar middleware a todas las rutas
router.use(validateJwt);

router.post(
  '/api/event/',
  [
    check('title', 'El titulo es obligatorio').not().isEmpty(),
    check('start', 'La fecha inicial es obligatoria').custom(isDate),
    check('end', 'La fecha inicial es obligatoria').custom(isDate),
    validateFields,
  ],
  createEvent
);
router.get('/api/event/', findEvents);
router.put(
  '/api/event/:id',
  [
    check('title', 'El titulo es obligatorio').not().isEmpty(),
    check('start', 'La fecha inicial es obligatoria').custom(isDate),
    check('end', 'La fecha inicial es obligatoria').custom(isDate),
    validateFields,
  ],
  updateEvent
);
router.delete('/api/event/:id', deleteEvent);

module.exports = router;
