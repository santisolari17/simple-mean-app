const express = require('express');
const app = express();
const config = require('./config/config');
const mongoose = require('mongoose');

const setupCtrl = require('./controllers/setupCtrl');
const apiCtrl = require('./controllers/apiCtrl');
setupCtrl(app);
apiCtrl(app);

const port = process.env.PORT || 3000;

const people = [
  'James Bond',
  'Ethan Hunt',
  'Sherlock Holmes'
]

mongoose.connect(config.getDbConnectionString(), { useNewUrlParser: true, useUnifiedTopology: true });

app.set('view engine', 'ejs');
app.use('/assets', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('index', { serverPeople: people });
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
});