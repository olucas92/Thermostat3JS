var Thermostat = function(){

  this.temperature = 20
  this.maxTemp = 32
  this.minTemp = 10
  this.energyColor = "medium-usage"

};

Thermostat.prototype.increaseTemp = function(changeTempBy){
  if(this.temperature + changeTempBy > this.maxTemp){
    this.temperature = this.maxTemp
    this.setColour();
  }
  else {
    this.temperature += changeTempBy  
    this.setColour();
  }

};

Thermostat.prototype.decreaseTemp = function(changeTempBy){
  if(this.temperature - changeTempBy < this.minTemp){
    this.temperature = this.minTemp
    this.setColour();
  }
  else {
    this.temperature -= changeTempBy  
    this.setColour();
  }
};

Thermostat.prototype.resetButton = function(){
  this.temperature = 20
};

Thermostat.prototype.powerSave = function(){
  this.maxTemp = 25
}

Thermostat.prototype.setColour = function(){
  if(this.temperature > 24){
    this.energyColour = "high-usage"
  }
  else if(this.temperature < 19){
    this.energyColour = "low-usage"
  }
  else {
    this.energyColour = "medium-usage"
  }
}