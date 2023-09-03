const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const router = require('./router');

app.use('/', router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});