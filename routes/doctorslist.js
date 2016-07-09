var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	var obj = {
    "Branches": {
        "Branch": [
            {
                "branchname": "Kondapur",
                "numberofdepartments": "12",
                "id": "kims001",
            },
             {
                "departmentname": "Gachibowli",
                "numberofdepartments": "15",
                "id": "kims002",
                
            },
             {
                "departmentname": "Somajiguda",
                "numberofdepartments": "18",
                "id": "kims003",
                
            },
             {
                "departmentname": "Film Nagar",
                "numberofdepartments": "16",
                "id": "kiimms004",
               
            },
             {
                "departmentname": "Secundrabad",
               "numberofdepartments": "12",
                "id": "kims005",
                
            },
        ]
    }
}
  res.send(obj);
});

module.exports = router;
