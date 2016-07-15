var express = require('express');
var router = express.Router();
var Promise = require('bluebird');
var appointment = require('../Db/Appointment');

/* GET users listing. */
router.post('/', function(req, res, next) {
        res.send(appointment.save(req.body));
});
 
router.get('/All', function(req, res, next){
  res.send(appointment.getAll());

}) ;
module.exports = router;
