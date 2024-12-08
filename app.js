const express = require('express');
const app = express();
const tasks = require('./routes/tasks');

//Middleware
app.use(express.json());

//routes
app.get('/hello', function (req, res) {
  res.send('Task manager');
});

app.use('/api/v1/tasks', tasks);

const port = 4000;
app.listen(port, () => console.log(`Listening on port ${port}`));
