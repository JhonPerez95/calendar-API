// GET
const findEvents = (req, res) => {
  res.json({
    ok: true,
    msg: 'GET: exitoso',
  });
};

// POST
const createEvent = (req, res) => {
  res.json({
    ok: true,
    msg: 'POST: exitoso',
  });
};

// PUT
const updateEvent = (req, res) => {
  res.json({
    ok: true,
    msg: 'PUT: exitoso',
  });
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
