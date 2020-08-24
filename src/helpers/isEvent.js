const isEvent = async (Evento, id, uid, res) => {
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
};

module.exports = {
  isEvent,
};
