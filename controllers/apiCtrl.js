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

  app.get('/api/todo/:id', (req, res) => {
    Todos.findById(req.params.id, (err, todo) => {
      if (err) throw err;

      res.send(todo);
    })
  })

  app.post('/api/todo', (req, res) => {
    if (req.body.id) {
      const toUpdate = {
        todo: req.body.todo,
        username: req.body.username,
        isDone: req.body.isDone,
        hasAttachment: req.body.hasAttachment,
      };

      Todos.updateOne({ _id: req.body.id }, toUpdate, (err) => {
        if (err) throw err;

        res.send(`${req.body.id} - Updated!`);
      })
    } else {
      const newTodo = new Todos({
        username: req.body.username,
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
    Todos.deleteOne({ _id: req.body.id }, (err) => {
      if (err) throw err;

      res.send(`${req.body.id} - Deleted!`);
    })
  })
}