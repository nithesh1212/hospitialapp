var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/all', function(req, res, next) {
	var obj = {
	"Name-1":"Cardiology", 
	"Name-2":"Dermatology",
	"Name-3":"Endocrinology",
	"Name-4":"ENT",
	"Name-5":"Gastroenterology" ,
	"Name-6":"Gynecology",
	"Name-7":"Nephrology",
	"Name-8":"Neurology",
	"Name-9":"Obesity",
	"Name-10":"Oncology",
	"Name-11":"Orthopedics",
	"Name-12":"Radiology"
	}
  res.send(obj);
});

module.exports = router;
