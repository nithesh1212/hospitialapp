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
                "branchname": "Gachibowli",
                "numberofdepartments": "15",
                "id": "kims002",
                
            },
             {
                "branchname": "Somajiguda",
                "numberofdepartments": "18",
                "id": "kims003",
                
            },
             {
                "branchname": "Film Nagar",
                "numberofdepartments": "16",
                "id": "kiimms004",
               
            },
             {
                "branchname": "Secundrabad",
               "numberofdepartments": "12",
                "id": "kims005",
                
            },
        ]
    }
}
  res.send(obj);
});

module.exports = router;
