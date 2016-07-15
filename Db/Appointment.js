var Store = require("jfs");
var db = new Store("data",{pretty:true});
var Promise = require('bluebird');

function Appointment(){
  
}

Appointment.prototype.save =  function(_json){
	return db.getSync("Appointments");
   //return new Promise(function(resolve){
      //resolve();
      /*console.log('>>>'+result);
      if(!result){
         result = {
      		"appointments":[]
        }
      }
      result.appointments.push(_json);
     return db.saveSync("Appointments", result);*/
   //});
   
}


Appointment.prototype.getAll = function(){
	return db.getSync("Appointments");
}

module.exports = new Appointment();




