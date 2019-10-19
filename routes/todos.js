const { Router } = require('express');
const router = Router();

router.get('/', (req, resp) =>
  resp.render('index', {
    title: 'index-page'
  })
);

router.get('/create', (req, resp) => {
  resp.render('create', { title: 'create-Page' });
});

module.exports = router;
