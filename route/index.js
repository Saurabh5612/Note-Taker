const router = require('express').Router();
const api = require('../route/api.js');
const htmlRoutes = require('../route/html.js');

router.use('/',htmlRoutes);
router.use('/api',api);

module.exports = router;