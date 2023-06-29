const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors')

// required route handlers
const doiRouter = require(path.resolve(__dirname, './routes/doiRouteHandlers'))

// parse request body
app.use(express.json());
app.use(cors());

// Have a production route:
if (process.env.NODE_ENV === 'production') {
  app.use('/dist', express.static(path.resolve(__dirname, '../dist')));
  app.get('/', (req, res) => {
    return res.status(200).sendFile(path.resolve(__dirname, '../dist/index.html'))
  });
} 

// create route handlers
app.use('/api', doiRouter)

// create catch-all route handler
app.use((req, res) => { 
  return res.sendStatus(404)
})

// create global error handler
app.use( (err, res) => {
  const defaultError = {
    log: 'Unknown Error caught in global error handler',
    status: 400,
    message: {err: err}
  };
  const errorObj = {
    ...defaultError, ...err
  }
  // display the current error
  console.log(errorObj.log, "status:", errorObj.status, "Error:", "error")
  return res.status(errorObj.status).send("errorObj.message.err");
})

// Have an event listener
app.listen(PORT, () => {
  console.log(`Server listening on localhost:${PORT}`)
});

module.exports = app;