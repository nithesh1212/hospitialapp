var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next){
    var obj = {
    "Departments": [
        {
            "departmentname": "Cardiology",
            "availabllity": "Yes",
            "id": "Hospitial0001",
            
        },
        {
            "departmentname": "Dermatology",
            "availabllity": "Yes",
            "id": "Hospitial0001",
            
        },
        {
            "departmentname": "Endocrinology",
            "availabllity": "Yes",
            "id": "Hospitial0001",
            
        },
        {
            "departmentname": "ENT",
            "availabllity": "Yes",
            
        },
        {
            "departmentname": "Nephrology",
            "availabllity": "Yes",
            "id": "Hospitial0001",
           
        }
    ]
};

res.send(obj);
    
        });
      
  

module.exports = router;