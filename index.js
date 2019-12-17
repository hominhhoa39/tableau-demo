const path = require('path');
const express = require('express');

var port = process.env.PORT || 3000;

const app = express();

app.listen(port, () => {
  console.log('Server is running on port ' + port + '...!');
})

app.use(express.static(path.join(__dirname, 'static')));
app.use('/npm', express.static(path.join(__dirname, 'node_modules')));

app.use((req, res) => {
  res.sendStatus(404);
});