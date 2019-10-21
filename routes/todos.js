const { Router } = require('express');
const router = Router();
const Todo = require('../models/Todo');

router.get('/', async (req, resp) => {
  const todos = await Todo.find({});
  //console.log(todos);
  resp.render('index', {
    title: 'index-page',
    isIndex: true,
    todos
  });
});

router.get('/create', (req, resp) => {
  //console.log('***********', req);
  resp.render('create', { title: 'create-Page', isCreate: true });
});

router.post('/create', async (req, res) => {
  //console.log('***********', req);
  const todo = new Todo({
    title: req.body.title
  });
  //console.log('***********', todo);
  await todo.save();
  res.redirect('/');
});

router.post('/complete', async function(req, res) {
  const todo = await Todo.findById(req.body.id);
  todo.completed = !!req.body.completed;
  await todo.save();
  res.redirect('/');
});

module.exports = router;
