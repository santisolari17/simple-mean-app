const Todos = require('../models/TodosModel');

module.exports = (app) => {
  app.get('/api/setupTodos', (req, res) => {
    const starterTodos = [
      {
        username: 'test',
        todo: 'Buy milk',
        idDone: false,
        hasAttachment: false,
      },
      {
        username: 'test 2',
        todo: 'Feed Dog',
        idDone: false,
        hasAttachment: false,
      },
      {
        username: 'test 3',
        todo: 'Learn NodeJS',
        idDone: false,
        hasAttachment: false,
      }
    ]

    Todos.create(starterTodos, (err, results) => {
      res.send(results);
    })
  })
}