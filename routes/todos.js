const { Router } = require('express');
const router = Router();

router.get('/', (req, resp) =>
  resp.render('index', {
    title: 'index-page'
  })
);

module.exports = router;
