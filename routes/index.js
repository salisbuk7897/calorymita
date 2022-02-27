var express = require('express');
var router = express.Router();
var ctrl = require('../appserver/Controller/db')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Calorymita' });
});

router.get('/simulation', function(req, res, next) {
  res.render('sm');
});

router.post('/simulation', ctrl.addtemp)

module.exports = router;
