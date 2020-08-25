require('dotenv').config();

const app = require('./server');

app.listen(process.env.PORT, () => {
  console.log(`Server started on ${process.env.PORT}`);
});
