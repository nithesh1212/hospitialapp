var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	var obj = {
    "Departments": {
        "Department": [
            {
                "departmentname": "Cardiology",
                "availabllity": "Yes",
                "id": "Hospitial0001",
                "data": [
                    {
                        "numberofdoctors": "15",
                        "numberofdoctorsavailable": "12,000 CAD",
                    }
                ]
            },
             {
                "departmentname": "Dermatology",
                "availabllity": "Yes",
                "id": "Hospitial0001",
                "data": [
                    {
                        "numberofdoctors": "15",
                        "numberofdoctorsavailable": "12,000 CAD",
                    }
                ]
            },
             {
                "departmentname": "Endocrinology",
                "availabllity": "Yes",
                "id": "Hospitial0001",
                "data": [
                    {
                        "numberofdoctors": "15",
                        "numberofdoctorsavailable": "12,000 CAD",
                    }
                ]
            },
             {
                "departmentname": "ENT",
                "availabllity": "Yes",
                "id": "Hospitial0001",
                "data": [
                    {
                        "numberofdoctors": "15",
                        "numberofdoctorsavailable": "12,000 CAD",
                    }
                ]
            },
             {
                "departmentname": "Nephrology",
                "availabllity": "Yes",
                "id": "Hospitial0001",
                "data": [
                    {
                        "numberofdoctors": "15",
                        "numberofdoctorsavailable": "12,000 CAD",
                    }
                ]
            },
        ]
    }
}
  res.send(obj);
});

module.exports = router;
