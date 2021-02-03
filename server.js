const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

const people = [
  'James Bond',
  'Ethan Hunt',
  'Sherlock Holmes'
]

app.set('view engine', 'ejs');
app.use('/assets', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('index', { serverPeople: people });
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
});