var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    var obj = {
    "BookedAppointment":{
        "AppointmentDetails"
        {
        
                    "PatientName"   :  "Nithesh",
                    "Patient Age"   :  "23",
                    "PatientGender" :  "Male",
                    "Branch"        :  "Kondapur",
                    "Department"    :  "Cardiology ",
                    "Doctor"        :  "S.Saandeep ",
                    "Date"          :  "22-07-2016 ",
                    "Time"          :  "2PM to 3 PM"

        }
}

  res.send(obj);
});
 
module.exports = router;
