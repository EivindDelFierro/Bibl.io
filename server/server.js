const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors')

// parse request body
app.use(express.json());

// Have a production route:
if (process.env.NODE_ENV === 'production') {
  app.use('/build', express.static(path.join(__dirname, '../build')));
  app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../index.html'))
  });
}

// create route handlers


// create catch-all route handler
app.get((req, res) => { 
  return res.sendStatus(404)
})

// create global error handler
app.use( (err, req, res) => {
  const defaultError = {
    log: 'Unknown Error caught in global error handler',
    status: 400,
    message: {err: err}
  };
  const newError = {
    ...defaultError, ...err
  }
  // display the current error
  console.log(newError.log, "status:", newError.status, "Error:", err)
  return res.status(newError.status).send(newError.message.err);
})


// Have an event listener
app.listen(PORT, () => {
  console.log(`Server listening on localhost:${PORT}`)
});

module.exports = app;