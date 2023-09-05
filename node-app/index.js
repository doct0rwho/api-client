const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const router = require('./router');
const passport = require('./passport')
const db = require('./db'); // Import the MongoDB connection
const secretKey = 'your-secret-key';


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'your-secret-key', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
