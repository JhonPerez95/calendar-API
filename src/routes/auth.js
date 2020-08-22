const express = require('express');
const router = express.Router();

router.get('/auth', (req, res) => {
  res.json({
    ok: true,
    route: ' /auht',
  });
});

module.exports = router;
