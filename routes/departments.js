var express = require('express');
var router = express.Router();

/* GET users listing. */
    var obj = {
    "Departments": [
        {
            "departmentname": "Cardiology",
            "availabllity": "Yes",
            "id": "Hospitial0001",
            "doctors": [
                {
                    "name": "S.Sandeep",
                    "department": "Cardiology",
                    "timings": "11AM to 12PM"
                },
                {
                    "name": "G.Anil",
                    "department": "Nephrology",
                    "timings": "12PM to 1PM"
                },
                {
                    "name": "M.Jagan",
                    "department": "Neurology",
                    "timings": "1PM to 2PM"
                },
                {
                    "name": "S.Sudha",
                    "department": "E.N.T",
                    "timings": "2PM to 3PM"
                },
                {
                    "name": "Sj.Manasa",
                    "department": "Endrocrinology",
                    "timings": "3PM to 4AM"
                }
            ]
        },
        {
            "departmentname": "Dermatology",
            "availabllity": "Yes",
            "id": "Hospitial0001",
            "doctors": [
                {
                    "name": "S.Sandeep",
                    "department": "Cardiology",
                    "timings": "11AM to 12PM"
                },
                {
                    "name": "G.Anil",
                    "department": "Nephrology",
                    "timings": "12PM to 1PM"
                },
                {
                    "name": "M.Jagan",
                    "department": "Neurology",
                    "timings": "1PM to 2PM"
                },
                {
                    "name": "S.Sudha",
                    "department": "E.N.T",
                    "timings": "2PM to 3PM"
                },
                {
                    "name": "Sj.Manasa",
                    "department": "Endrocrinology",
                    "timings": "3PM to 4AM"
                }
            ]
        },
        {
            "departmentname": "Endocrinology",
            "availabllity": "Yes",
            "id": "Hospitial0001",
            "doctors": [
                {
                    "name": "S.Sandeep",
                    "department": "Cardiology",
                    "timings": "11AM to 12PM"
                },
                {
                    "name": "G.Anil",
                    "department": "Nephrology",
                    "timings": "12PM to 1PM"
                },
                {
                    "name": "M.Jagan",
                    "department": "Neurology",
                    "timings": "1PM to 2PM"
                },
                {
                    "name": "S.Sudha",
                    "department": "E.N.T",
                    "timings": "2PM to 3PM"
                },
                {
                    "name": "Sj.Manasa",
                    "department": "Endrocrinology",
                    "timings": "3PM to 4AM"
                }
            ]
        },
        {
            "departmentname": "ENT",
            "availabllity": "Yes",
            "doctors": [
                {
                    "name": "S.Sandeep",
                    "department": "Cardiology",
                    "timings": "11AM to 12PM"
                },
                {
                    "name": "G.Anil",
                    "department": "Nephrology",
                    "timings": "12PM to 1PM"
                },
                {
                    "name": "M.Jagan",
                    "department": "Neurology",
                    "timings": "1PM to 2PM"
                },
                {
                    "name": "S.Sudha",
                    "department": "E.N.T",
                    "timings": "2PM to 3PM"
                },
                {
                    "name": "Sj.Manasa",
                    "department": "Endrocrinology",
                    "timings": "3PM to 4AM"
                }
            ]
        },
        {
            "departmentname": "Nephrology",
            "availabllity": "Yes",
            "id": "Hospitial0001",
            "doctors": [
                {
                    "name": "S.Sandeep",
                    "department": "Cardiology",
                    "timings": "11AM to 12PM"
                },
                {
                    "name": "G.Anil",
                    "department": "Nephrology",
                    "timings": "12PM to 1PM"
                },
                {
                    "name": "M.Jagan",
                    "department": "Neurology",
                    "timings": "1PM to 2PM"
                },
                {
                    "name": "S.Sudha",
                    "department": "E.N.T",
                    "timings": "2PM to 3PM"
                },
                {
                    "name": "Sj.Manasa",
                    "department": "Endrocrinology",
                    "timings": "3PM to 4AM"
                }
            ]
        }
    ]
};

router.get('/:branchname/doctors', function(req, res, next){
    return new Promise(function (resolve, reject) {
        obj.Branches.map(function(branch){
                if(branch.branchname === req.params.branchname){
                   res.send(branch);  
                }
        });
      
    });

 
});

module.exports = router;