var Thermostat = function(){

  this.temperature = 20
  this.maxTemp = 32
  this.minTemp = 10

};

Thermostat.prototype.increaseTemp = function(changeTempBy){
  this.temperature += changeTempBy
};

Thermostat.prototype.decreaseTemp = function(changeTempBy){
  this.temperature -= changeTempBy
};