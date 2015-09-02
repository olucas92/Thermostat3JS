var Thermostat = function(){

  this.temperature = 20

};

Thermostat.prototype.increaseTemp = function(changeTempBy){
  this.temperature += changeTempBy
};