var express = require('express');
var router = express.Router();
var Promise = require('bluebird');

/* GET users listing. */
router.get('/', function(req, res, next) {
    var obj = {
    "Branches": {
        "Branch": [
            {
                "branchname": "Kondapur",
                "numberofdepartments": "12",
                "lat":"17.46221",
                "long":"78.35685"
            },
             {
                "branchname": "Gachibowli",
                "numberofdepartments": "15",
                "lat":"17.44008",
                "long":"78.34892",
                
            },
             {
                "branchname": "Somajiguda",
                "numberofdepartments": "18",
                "lat":"17.41418",
                "long":"78.41169"
                
            },
             {
                "branchname": "Film Nagar",
                "numberofdepartments": "16",
                "lat":"17.46221",
                "long":"78.35685"
               
            },
             {
                "branchname": "Secundrabad",
               "numberofdepartments": "12",
                "lat":"17.43993",
                "long":"78.49827"
                
            },
        ]
    }
}
  res.send(obj);
});

module.exports = router;




router.get('/:location', function(req, res, next)
 {
    var obj =
     {
    "Branches": 
         [
            {
                "branchname": "Kondapur",
                "numberofdepartments": "12",
                "lat":"17.46221",
                "long":"78.35685",
                "doctors":[
                 {"name":"S.Sandeep",
                   "department":"Cardiology",
                   "timings":"10AM to 11AM"
                 },
                 {"name":"G.Anil",
                   "department":"Nephrology",
                   "timings":"11AM to 12PM"
                 },
                 {"name":"M.Jagan",
                   "department":"Neurology",
                   "timings":"12PM to 1PM"
                 },
                 {"name":"S.Sudha",
                   "department":"E.N.T",
                   "timings":"3PM to 4PM"
                 },
                 {"name":"Sj.Manasa",
                   "department":"Endrocrinology",
                   "timings":"4PM to 5AM"
                 },
                ]
            },

             {
                "branchname": "Gachibowli",
                "numberofdepartments": "15",
                "lat":"17.44008",
                "long":"78.34892",
                "doctors":[
                 {"name":"S.Sandeep",
                   "department":"Cardiology",
                   "timings":"11AM to 12PM"
                 },
                 {"name":"G.Anil",
                   "department":"Nephrology",
                   "timings":"12PM to 1PM"
                 },
                 {"name":"M.Jagan",
                   "department":"Neurology",
                   "timings":"1PM to 2PM"
                 },
                 {"name":"S.Sudha",
                   "department":"E.N.T",
                   "timings":"2PM to 3PM"
                 },
                 {"name":"Sj.Manasa",
                   "department":"Endrocrinology",
                   "timings":"3PM to 4AM"
                 },
                ]
             },

             {
                "branchname": "Somajiguda",
                "numberofdepartments": "18",
                "lat":"17.41418",
                "long":"78.41169",
                "doctors":[
                 {"name":"S.Sandeep",
                   "department":"Cardiology",
                   "timings":"1PM to 2PM"
                 },
                 {"name":"G.Anil",
                   "department":"Nephrology",
                   "timings":"3PM to 4PM"
                 },
                 {"name":"M.Jagan",
                   "department":"Neurology",
                   "timings":"5PM to 6PM"
                 },
                 {"name":"S.Sudha",
                   "department":"E.N.T",
                   "timings":"7PM to 8PM"
                 },
                 {"name":"Sj.Manasa",
                   "department":"Endrocrinology",
                   "timings":"2PM to 3PM"
                 },
                ]
                
            },
             {
                "branchname": "Film Nagar",
                "numberofdepartments": "16",
                "lat":"17.46221",
                "long":"78.35685",
                "doctors":[
                 {"name":"S.Sandeep",
                   "department":"Cardiology",
                   "timings":"5PM to 6PM"
                 },
                 {"name":"G.Anil",
                   "department":"Nephrology",
                   "timings":"6PM to 7PM"
                 },
                 {"name":"M.Jagan",
                   "department":"Neurology",
                   "timings":"10AM to 11AM"
                 },
                 {"name":"S.Sudha",
                   "department":"E.N.T",
                   "timings":"5PM to 6PPM"
                 },
                 {"name":"Sj.Manasa",
                   "department":"Endrocrinology",
                   "timings":"7PM to 8AM"
                 },
                ]
               
            },
             {
                "branchname": "Secundrabad",
               "numberofdepartments": "12",
                "lat":"17.43993",
                "long":"78.49827",
                "doctors":[
                 {"name":"S.Sandeep",
                   "department":"Cardiology",
                   "timings":"12PM to 1PM"
                 },
                 {"name":"G.Anil",
                   "department":"Nephrology",
                   "timings":"10AM to 11AM"
                 },
                 {"name":"M.Jagan",
                   "department":"Neurology",
                   "timings":"6PM to 7PM"
                 },
                 {"name":"S.Sudha",
                   "department":"E.N.T",
                   "timings":"3PM to 4PM"
                 },
                 {"name":"Sj.Manasa",
                   "department":"Endrocrinology",
                   "timings":"5PM to 6AM"
                 },
                ]
                
            },
        ]
    }
    

  
  return new Promise(function (resolve, reject) 
  {
        function distance(lat1, lon1, lat2, lon2, unit) 
        {

            var radlat1 = Math.PI * lat1/180
            var radlat2 = Math.PI * lat2/180
            var theta = lon1-lon2
            var radtheta = Math.PI * theta/180
            var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
            dist = Math.acos(dist)
            dist = dist * 180/Math.PI
            dist = dist * 60 * 1.1515
            if (unit=="K") { dist = dist * 1.609344 }
            if (unit=="N") { dist = dist * 0.8684 }
            return dist
        }

        var location =req.params.location;
        var commasep = location.split(',');
        var temp = {"Branches":[] }

        obj.Branches.map(function(branch){
            
        var dist = distance(commasep[0],commasep[1],branch.lat,branch.long,'K');
        
            if(dist>5)
            {        
                branch.dist = dist.toFixed(2);
                temp.Branches.push(branch);
            }
            
        });
     
     temp.Branches.sort(function(a, b){
 return a.dist-b.dist
})
res.send(temp);
});
    
});
var obj =
     {
    "Branches": 
         [
            {
                "branchname": "Kondapur",
                "numberofdepartments": "12",
                "lat":"17.46221",
                "long":"78.35685",
                "doctors":[
                 {"name":"S.Sandeep",
                   "department":"Cardiology",
                   "timings":"10AM to 11AM"
                 },
                 {"name":"G.Anil",
                   "department":"Nephrology",
                   "timings":"11AM to 12PM"
                 },
                 {"name":"M.Jagan",
                   "department":"Neurology",
                   "timings":"12PM to 1PM"
                 },
                 {"name":"S.Sudha",
                   "department":"E.N.T",
                   "timings":"3PM to 4PM"
                 },
                 {"name":"Sj.Manasa",
                   "department":"Endrocrinology",
                   "timings":"4PM to 5AM"
                 },
                ]
            },

             {
                "branchname": "Gachibowli",
                "numberofdepartments": "15",
                "lat":"17.44008",
                "long":"78.34892",
                "doctors":[
                 {"name":"S.Sandeep",
                   "department":"Cardiology",
                   "timings":"11AM to 12PM"
                 },
                 {"name":"G.Anil",
                   "department":"Nephrology",
                   "timings":"12PM to 1PM"
                 },
                 {"name":"M.Jagan",
                   "department":"Neurology",
                   "timings":"1PM to 2PM"
                 },
                 {"name":"S.Sudha",
                   "department":"E.N.T",
                   "timings":"2PM to 3PM"
                 },
                 {"name":"Sj.Manasa",
                   "department":"Endrocrinology",
                   "timings":"3PM to 4AM"
                 },
                ]
             },

             {
                "branchname": "Somajiguda",
                "numberofdepartments": "18",
                "lat":"17.41418",
                "long":"78.41169",
                "doctors":[
                 {"name":"S.Sandeep",
                   "department":"Cardiology",
                   "timings":"1PM to 2PM"
                 },
                 {"name":"G.Anil",
                   "department":"Nephrology",
                   "timings":"3PM to 4PM"
                 },
                 {"name":"M.Jagan",
                   "department":"Neurology",
                   "timings":"5PM to 6PM"
                 },
                 {"name":"S.Sudha",
                   "department":"E.N.T",
                   "timings":"7PM to 8PM"
                 },
                 {"name":"Sj.Manasa",
                   "department":"Endrocrinology",
                   "timings":"2PM to 3PM"
                 },
                ]
                
            },
             {
                "branchname": "Film Nagar",
                "numberofdepartments": "16",
                "lat":"17.46221",
                "long":"78.35685",
                "doctors":[
                 {"name":"S.Sandeep",
                   "department":"Cardiology",
                   "timings":"5PM to 6PM"
                 },
                 {"name":"G.Anil",
                   "department":"Nephrology",
                   "timings":"6PM to 7PM"
                 },
                 {"name":"M.Jagan",
                   "department":"Neurology",
                   "timings":"10AM to 11AM"
                 },
                 {"name":"S.Sudha",
                   "department":"E.N.T",
                   "timings":"5PM to 6PPM"
                 },
                 {"name":"Sj.Manasa",
                   "department":"Endrocrinology",
                   "timings":"7PM to 8AM"
                 },
                ]
               
            },
             {
                "branchname": "Secundrabad",
               "numberofdepartments": "12",
                "lat":"17.43993",
                "long":"78.49827",
                "doctors":[
                 {"name":"S.Sandeep",
                   "department":"Cardiology",
                   "timings":"Available from Monday to Friday between 12PM to 1PM"
                 },
                 {"name":"G.Anil",
                   "department":"Nephrology",
                   "timings":"Available from Monday to Friday between 10AM to 11AM"
                 },
                 {"name":"M.Jagan",
                   "department":"Neurology",
                   "timings":"Available from Monday to Friday between 6PM to 7PM"
                 },
                 {"name":"S.Sudha",
                   "department":"E.N.T",
                   "timings":"Available from Monday to Friday between 3PM to 4PM"
                 },
                 {"name":"Sj.Manasa",
                   "department":"Endrocrinology",
                   "timings":"Available from Monday to Friday between 5PM to 6AM"
                 },
                ]
                
            },
        ]
    }


router.get('/:branchname/doctors', function(req, res, next)
 {
    
    return new Promise(function (resolve, reject) {
        obj.Branches.map(function(branch){
                if(branch.branchname === req.params.branchname){
                   res.send(branch);  
                }
        });
      
    });

   
});





module.exports = router;

