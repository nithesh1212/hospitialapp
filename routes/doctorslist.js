var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	var obj = {
    "Doctors": {
        "Doctor": [
            {
                "doctorname": "S.Sandeep",
                "departments": "Cardiology",
                "branch":["Kondapur","Gachibowli","Somajiguda"],
                "id": "card001",
            },
             {
                "doctorname": "M.Jagan",
                "departments": "Neurology",
                "branch":["Kondapur","Gachibowli","Filmnagar"],
                "id": "card001",
            },
           {
                "doctorname": "M.Ramakrishna",
                "departments": "Endrocrinology",
                "branch":["Kondapur","Secundrabad","Somajiguda"],
                "id": "card001",
            },
             {
                "doctorname": "G.Anil",
                "departments": "Nephrology",
                "branch":["Filmnagar","Secundrabad","Somajiguda"],
                "id": "card001",
            },
             {
                "doctorname": "M.Nithesh",
                "departments": "E.N.T",
                "branch":["Kondapur","Gachibowli","Somajiguda"],
                "id": "card001",
            },
        ]
    }
}
  res.send(obj);
});

module.exports = router;
