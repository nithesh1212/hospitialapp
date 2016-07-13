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
                "long":"78.35685"
            },

             {
                "branchname": "Gachibowli",
                "numberofdepartments": "15",
                "lat":"17.44008",
                "long":"78.34892"
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
        
        if(dist<6)
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


module.exports = router;

