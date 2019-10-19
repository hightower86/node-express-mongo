const { Router } = require('express');
const router = Router();

router.get('/', (req, resp) =>
  resp.render('index', {
    title: 'index-page',
    isIndex: true
  })
);

router.get('/create', (req, resp) => {
  resp.render('create', { title: 'create-Page', isCreate: true });
});

module.exports = router;
