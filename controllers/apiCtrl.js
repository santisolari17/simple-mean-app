const Todos = require('../models/TodosModel');
const bodyParser = require('body-parser');

module.exports = (app) => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.get('/api/todos/:username', (req, res) => {
    Todos.find({ username: req.params.username }, (err, todos) => {
      if (err) throw err;

      res.send(todos);
    });
  })

  app.get('api/todo/:id', (req, res) => {
    Todos.findById({ _id: req.params.id }, (err, todo) => {
      if (err) throw err;

      res.send(todos);
    })
  })

  app.post('api/todo', (req, res) => {
    if (req.body.id) {
      const toUpdate = {
        todo: req.body.todo,
        isDone: req.body.isDone,
        hasAttachment: req.body.hasAttachment,
      };

      Todos.findByIdAndUpdate(req.body.id, toUpdate, (err, todo) => {
        if (err) throw err;

        res.send(`${todo._id} - Updated!`);
      })
    } else {
      const newTodo = new Todos({
        username: 'holamundo',
        todo: req.body.todo,
        isDone: req.body.isDone,
        hasAttachment: req.body.hasAttachment,
      })

      newTodo.save((err, todo) => {
        if (err) throw err;

        res.send(`${todo._id} - Created`);
      })
    }
  })

  app.delete('/api/todo', (req, res) => {
    Todos.findByIdAndRemove(req.body.id, (err) => {
      if (err) throw err;

      res.send(`${req.body.id} - Deleted!`);
    })
  })
}