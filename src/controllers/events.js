const Evento = require('../models/Event');
const { isEvent } = require('../helpers/isEvent');

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
    await isEvent(Evento, id, uid, res);

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
const deleteEvent = async (req, res) => {
  const { id } = req.params;
  const { uid } = req.user;

  try {
    // Validacion del evento
    await isEvent(Evento, id, uid, res);
    const deletedEvent = await Evento.findByIdAndDelete(id);
    res.json({
      ok: true,
      msg: 'Evento Eliminado',
      event: deletedEvent,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Comuniquese con el administrador',
    });
  }
};

module.exports = {
  findEvents,
  createEvent,
  updateEvent,
  deleteEvent,
};
