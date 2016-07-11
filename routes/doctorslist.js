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

router.get('/:name/branches', function(req, res, next){
var obj = {
    "Doctors":  [
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
var doname =req.params.name;
obj.Doctors.map(function(doctor){
    if(doctor.doctorname === doname){
        res.send(doctor);
    }
})
});

module.exports = router;
