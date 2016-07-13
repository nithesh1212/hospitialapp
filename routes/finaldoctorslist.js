var express = require('express');
var router = express.Router();
var Promise = require('bluebird');

/* GET users listing. */
router.get('/:name', function(req, res, next) {
	var obj = {
    "Doctors":  [
            {
                "branch"    : "Kondapur",
                "doctorname": "S.Sandeep",
                "departments": "Cardiology",
                "availability":"The selected doctor is available in this branch from Monday to Saturday between 10AM to 11AM"
            },
            {
                "branch"    : "Kondapur",
                "doctorname": "G.Anil",
                "departments": "Neurology",
                "availability":"The selected doctor is available in this branch from Monday to Saturday between 11AM to 12PM"
            },
          {
                "branch"    : "Kondapur",
                "doctorname": "M.Jagan",
                "departments": "Dermotology",
                "availability":"The selected doctor is available in this branch from Monday to Saturday between 2PM to 3PM"
            },
            {
                "branch"    : "Kondapur",
                "doctorname": "S.Sudha",
                "departments": "E.N.T",
                "availability":"The selected doctor is available in this branch from Monday to Saturday between 3PM to 4PM"
            },
            {
                "branch"    : "Kondapur",
                "doctorname": "J.Manasa",
                "departments": "Endrocrinology",
                "availability":"The selected doctor is available in this branch from Monday to Saturday between 4PM to 5PM"
            },
                 {
                "branch"    : "Filimnagar",
                "doctorname": "S.Sandeep",
                "departments": "Cardiology",
                "availability":"The selected doctor is available in this branch from Monday to Saturday between 11AM to 12AM"
            },
            {
                "branch"    : "Filimnagar",
                "doctorname": "G.Anil",
                "departments": "Neurology",
                "availability":"The selected doctor is available in this branch from Monday to Saturday between 2PM to 3PM"
            },
          {
                "branch"    : "Filimnagar",
                "doctorname": "M.Jagan",
                "departments": "Dermotology",
                "availability":"The selected doctor is available in this branch from Monday to Saturday between 3PM to 4PM"
            },
            {
                "branch"    : "Filimnagar",
                "doctorname": "S.Sudha",
                "departments": "E.N.T",
                "availability":"The selected doctor is available in this branch from Monday to Saturday between 4PM to 5PM"
            },
            {
                "branch"    : "Filimnagar",
                "doctorname": "J.Manasa",
                "departments": "Endrocrinology",
                "availability":"The selected doctor is available in this branch from Monday to Saturday between 3PM to 4PM"
            },
            {
                "branch"    : "Gachibowli",
                "doctorname": "S.Sandeep",
                "departments": "Cardiology",
                "availability":"The selected doctor is available in this branch from Monday to Saturday between 2PM to 3PM"
            },
            {
                "branch"    : "Gachibowli",
                "doctorname": "G.Anil",
                "departments": "Neurology",
                "availability":"The selected doctor is available in this branch from Monday to Saturday between 3PM to 4PM"
            },
          {
                "branch"    : "Gachibowli",
                "doctorname": "M.Jagan",
                "departments": "Dermotology",
                "availability":"The selected doctor is available in this branch from Monday to Saturday between 4PM to 5PM"
            },
            {
                "branch"    : "Gachibowli",
                "doctorname": "S.Sudha",
                "departments": "E.N.T",
                "availability":"The selected doctor is available in this branch from Monday to Saturday between 10PM to 11PM"
            },
            {
                "branch"    : "Gachibowli",
                "doctorname": "J.Manasa",
                "departments": "Endrocrinology",
                "availability":"The selected doctor is available in this branch from Monday to Saturday between 2PM to 3PM"
            },
                  {
                "branch"    : "Somajiguda",
                "doctorname": "S.Sandeep",
                "departments": "Cardiology",
                "availability":"The selected doctor is available in this branch from Monday to Saturday between 3PM to 4PM"
            },
            {
                "branch"    : "Somajiguda",
                "doctorname": "G.Anil",
                "departments": "Neurology",
                "availability":"The selected doctor is available in this branch from Monday to Saturday between 4PM to 5PM"
            },
          {
                "branch"    : "Somajiguda",
                "doctorname": "M.Jagan",
                "departments": "Dermotology",
                "availability":"The selected doctor is available in this branch from Monday to Saturday between 10AM to 11A M"
            },
            {
                "branch"    : "Somajiguda",
                "doctorname": "S.Sudha",
                "departments": "E.N.T",
                "availability":"The selected doctor is available in this branch from Monday to Saturday between 2PM to 3PM"
            },
            {
                "branch"    : "Somajiguda",
                "doctorname": "J.Manasa",
                "departments": "Endrocrinology",
                "availability":"The selected doctor is available in this branch from Monday to Saturday between 11AM to 12PM"
            },
            {
                "branch"    : "Secundrabad",
                "doctorname": "S.Sandeep",
                "departments": "Cardiology",
                "availability":"The selected doctor is available in this branch from Monday to Saturday between 4PM to 5PM"
            },
            {
                "branch"    : "Secundrabad",
                "doctorname": "G.Anil",
                "departments": "Neurology",
                "availability":"The selected doctor is available in this branch from Monday to Saturday between 10AM to 11AM"
            },
          {
                "branch"    : "Secundrabad",
                "doctorname": "M.Jagan",
                "departments": "Dermotology",
                "availability":"The selected doctor is available in this branch from Monday to Saturday between 11AM to 12PM"
            },
            {
                "branch"    : "Secundrabad",
                "doctorname": "S.Sudha",
                "departments": "E.N.T",
                "availability":"The selected doctor is available in this branch from Monday to Saturday between 11AM to 12PM"
            },
            {
                "branch"    : "Secundrabad",
                "doctorname": "J.Manasa",
                "departments": "Endrocrinology",
                "availability":"The selected doctor is available in this branch from Monday to Saturday between 10AM to 11AM"
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
router.get('/:name/availability', function(req, res, next) {
    var obj = {
    "Doctors":  [
            {
                "branch"    : "Kondapur",
                "doctorname": "S.Sandeep",
                "departments": "Cardiology",
                "availability":"The selected doctor is available in this branch from Monday to Saturday between 10AM to 11AM"
            },
            {
                "branch"    : "Kondapur",
                "doctorname": "G.Anil",
                "departments": "Neurology",
                "availability":"The selected doctor is available in this branch from Monday to Saturday between 11AM to 12PM"
            },
          {
                "branch"    : "Kondapur",
                "doctorname": "M.Jagan",
                "departments": "Dermotology",
                "availability":"The selected doctor is available in this branch from Monday to Saturday between 2PM to 3PM"
            },
            {
                "branch"    : "Kondapur",
                "doctorname": "S.Sudha",
                "departments": "E.N.T",
                "availability":"The selected doctor is available in this branch from Monday to Saturday between 3PM to 4PM"
            },
            {
                "branch"    : "Kondapur",
                "doctorname": "J.Manasa",
                "departments": "Endrocrinology",
                "availability":"The selected doctor is available in this branch from Monday to Saturday between 4PM to 5PM"
            },
                 {
                "branch"    : "Filimnagar",
                "doctorname": "S.Sandeep",
                "departments": "Cardiology",
                "availability":"The selected doctor is available in this branch from Monday to Saturday between 11AM to 12AM"
            },
            {
                "branch"    : "Filimnagar",
                "doctorname": "G.Anil",
                "departments": "Neurology",
                "availability":"The selected doctor is available in this branch from Monday to Saturday between 2PM to 3PM"
            },
          {
                "branch"    : "Filimnagar",
                "doctorname": "M.Jagan",
                "departments": "Dermotology",
                "availability":"The selected doctor is available in this branch from Monday to Saturday between 3PM to 4PM"
            },
            {
                "branch"    : "Filimnagar",
                "doctorname": "S.Sudha",
                "departments": "E.N.T",
                "availability":"The selected doctor is available in this branch from Monday to Saturday between 4PM to 5PM"
            },
            {
                "branch"    : "Filimnagar",
                "doctorname": "J.Manasa",
                "departments": "Endrocrinology",
                "availability":"The selected doctor is available in this branch from Monday to Saturday between 3PM to 4PM"
            },
            {
                "branch"    : "Gachibowli",
                "doctorname": "S.Sandeep",
                "departments": "Cardiology",
                "availability":"The selected doctor is available in this branch from Monday to Saturday between 2PM to 3PM"
            },
            {
                "branch"    : "Gachibowli",
                "doctorname": "G.Anil",
                "departments": "Neurology",
                "availability":"The selected doctor is available in this branch from Monday to Saturday between 3PM to 4PM"
            },
          {
                "branch"    : "Gachibowli",
                "doctorname": "M.Jagan",
                "departments": "Dermotology",
                "availability":"The selected doctor is available in this branch from Monday to Saturday between 4PM to 5PM"
            },
            {
                "branch"    : "Gachibowli",
                "doctorname": "S.Sudha",
                "departments": "E.N.T",
                "availability":"The selected doctor is available in this branch from Monday to Saturday between 10PM to 11PM"
            },
            {
                "branch"    : "Gachibowli",
                "doctorname": "J.Manasa",
                "departments": "Endrocrinology",
                "availability":"The selected doctor is available in this branch from Monday to Saturday between 2PM to 3PM"
            },
                  {
                "branch"    : "Somajiguda",
                "doctorname": "S.Sandeep",
                "departments": "Cardiology",
                "availability":"The selected doctor is available in this branch from Monday to Saturday between 3PM to 4PM"
            },
            {
                "branch"    : "Somajiguda",
                "doctorname": "G.Anil",
                "departments": "Neurology",
                "availability":"The selected doctor is available in this branch from Monday to Saturday between 4PM to 5PM"
            },
          {
                "branch"    : "Somajiguda",
                "doctorname": "M.Jagan",
                "departments": "Dermotology",
                "availability":"The selected doctor is available in this branch from Monday to Saturday between 10AM to 11A M"
            },
            {
                "branch"    : "Somajiguda",
                "doctorname": "S.Sudha",
                "departments": "E.N.T",
                "availability":"The selected doctor is available in this branch from Monday to Saturday between 2PM to 3PM"
            },
            {
                "branch"    : "Somajiguda",
                "doctorname": "J.Manasa",
                "departments": "Endrocrinology",
                "availability":"The selected doctor is available in this branch from Monday to Saturday between 11AM to 12PM"
            },
            {
                "branch"    : "Secundrabad",
                "doctorname": "S.Sandeep",
                "departments": "Cardiology",
                "availability":"The selected doctor is available in this branch from Monday to Saturday between 4PM to 5PM"
            },
            {
                "branch"    : "Secundrabad",
                "doctorname": "G.Anil",
                "departments": "Neurology",
                "availability":"The selected doctor is available in this branch from Monday to Saturday between 10AM to 11AM"
            },
          {
                "branch"    : "Secundrabad",
                "doctorname": "M.Jagan",
                "departments": "Dermotology",
                "availability":"The selected doctor is available in this branch from Monday to Saturday between 11AM to 12PM"
            },
            {
                "branch"    : "Secundrabad",
                "doctorname": "S.Sudha",
                "departments": "E.N.T",
                "availability":"The selected doctor is available in this branch from Monday to Saturday between 11AM to 12PM"
            },
            {
                "branch"    : "Secundrabad",
                "doctorname": "J.Manasa",
                "departments": "Endrocrinology",
                "availability":"The selected doctor is available in this branch from Monday to Saturday between 10AM to 11AM"
            },


        ]
}
var doname =req.params.name;
obj.Doctors.map(function(doctor){
    if(doctor.doctorname === doname){
        res.send(doctor.availability);
    }

})
});


module.exports = router;