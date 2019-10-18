const { Router } = require('express');
const router = Router();

router.get('/', (req, resp) => {
  resp.render('index', {
    title: 'Todos list',
    isIndex: true
  });
});

router.get('/create', (req, resp) => {
  resp.render('create', {
    title: 'Create todo',
    isCreate: true
  });
});

module.exports = router;
