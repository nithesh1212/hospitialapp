var express = require('express');
var router = express.Router();
var Promise = require('bluebird');

/* GET users listing. */
router.get('/:name', function(req, res, next) {
	var obj = {
    "Doctors":  [
            {
                "doctorname": "S.Sandeep",
                "departments": "Cardiology",
                "branch":["Kondapur 2PM to 3PM","Gachibowli 4PM to 5PM","Somajiguda 7PM to 8PM"],
                "id": "card001",
            },
             {
                "doctorname": "M.Jagan",
                "departments": "Neurology",
                "branch":["Kondapur 2PM to 3PM" ,"Gachibowli 4PM to 5PM","Filmnagar 7PM to 8PM"],
                "id": "card001",
            },
           {
                "doctorname": "M.Ramakrishna",
                "departments": "Endrocrinology",
                "branch":["Kondapur 2PM to 3PM","Secundrabad 4PM to 5PM","Somajiguda 7PM to 8PM"],
                "id": "card001",
            },
             {
                "doctorname": "G.Anil",
                "departments": "Nephrology",
                "branch":["Filmnagar 2PM to 3PM","Secundrabad 4PM to 5PM","Somajiguda 7PM to 8PM"],
                "id": "card001",
            },
             {
                "doctorname": "M.Nithesh",
                "departments": "E.N.T",
                "branch":["Kondapur 2PM to 3PM","Gachibowli 4PM to 5PM","Somajiguda 7PM to 8PM"],
                "id": "card001",
            },
        ]
}

 return new Promise(function (resolve, reject) {
    var temp = {
        "Doctors":[]
    }
    var doname =req.params.name;
        for(var i=0; i< obj.Doctors.length; i++){
             if(obj.Doctors[i].doctorname.indexOf(doname) > -1) {
                temp.Doctors.push(obj.Doctors[i]);
             }
        }
      res.send(temp);
    });
  
});





router.get('/:name/branches', function(req, res, next){
var obj = {
    "Doctors":  [
            {
                "doctorname": "S.Sandeep",
                "departments": "Cardiology",
                "branch":["Kondapur 2PM to 3PM","Gachibowli 4PM to 5PM","Somajiguda 7PM to 8PM"],
                "id": "card001",
            },
             {
                "doctorname": "M.Jagan",
                "departments": "Neurology",
                "branch":["Kondapur 2PM to 3PM" ,"Gachibowli 4PM to 5PM","Filmnagar 7PM to 8PM"],
                "id": "card001",
            },
           {
                "doctorname": "M.Ramakrishna",
                "departments": "Endrocrinology",
                "branch":["Kondapur 2PM to 3PM","Secundrabad 4PM to 5PM","Somajiguda 7PM to 8PM"],
                "id": "card001",
            },
             {
                "doctorname": "G.Anil",
                "departments": "Nephrology",
                "branch":["Filmnagar 2PM to 3PM","Secundrabad 4PM to 5PM","Somajiguda 7PM to 8PM"],
                "id": "card001",
            },
             {
                "doctorname": "M.Nithesh",
                "departments": "E.N.T",
                "branch":["Kondapur 2PM to 3PM","Gachibowli 4PM to 5PM","Somajiguda 7PM to 8PM"],
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
