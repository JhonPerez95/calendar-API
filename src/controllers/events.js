const Evento = require('../models/Event');

// GET
const findEvents = async (req, res) => {
  try {
    const events = await Evento.find().populate('user', 'name');
    res.json({
      ok: true,
      events,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'comuniquese con el administrador',
    });
  }
};

// POST
const createEvent = async (req, res) => {
  const { user } = req;
  const event = new Evento(req.body);
  try {
    event.user = user.uid;
    const savedEvent = await event.save();
    return res.status(201).json({
      ok: true,
      msg: 'Se guardo exitosamente',
      data: savedEvent,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Comuniquese con el administrador',
    });
  }

  res.json({
    ok: true,
    msg: 'POST: exitoso',
    data: event,
  });
};

// PUT
const updateEvent = async (req, res) => {
  const { id } = req.params;
  const { uid } = req.user;
  const options = {
    new: true,
    runValidators: true,
  };

  try {
    // Validacion del evento
    const event = await Evento.findById(id);
    if (!event) {
      return res.status(404).json({
        ok: false,
        msg: 'Evento no existe',
      });
    }
    if (event.user.toString() !== uid) {
      return res.status(401).json({
        ok: false,
        msg: 'Usuario no tiene  permiso',
      });
    }
    const newEvent = {
      ...req.body,
      user: uid,
    };

    const updatedEvent = await Evento.findByIdAndUpdate(id, newEvent, options);

    res.json({
      ok: true,
      event: updatedEvent,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Comuniquese con el administrador',
    });
  }
};

// DELETE
const deleteEvent = (req, res) => {
  res.json({
    ok: true,
    msg: 'DELETE: exitoso',
  });
};

module.exports = {
  findEvents,
  createEvent,
  updateEvent,
  deleteEvent,
};
