var Thermostat = function(){

  this.temperature = 20
  // this.maxTemp = 32
  this.minTemp = 10
  this.energyColor = "medium-usage"
  this.powerSaving = true

};

Thermostat.prototype.increaseTemp = function(changeTempBy){
  if(this.temperature + changeTempBy > this.maxTemp()){
    this.temperature = this.maxTemp();
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

Thermostat.prototype.maxTemp = function(){
  if(this.powerSaving === true) {
    return 25
  }
  else{
    return 32
  }
};

Thermostat.prototype.resetButton = function(){
  this.temperature = 20
};

// Thermostat.prototype.powerSave = function(){
//   this.maxTemp = 25
// }

Thermostat.prototype.togglePowerSavingMode = function(){
  if(this.powerSaving === true) {
    this.powerSaving = false
  }
  else{
    this.powerSaving = true;
    if(this.temperature > this.maxTemp()){
      this.temperature = this.maxTemp();
    }
  }
};

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

Thermostat.prototype.currentTime = function(){
  var date = new Date();
  var hour = date.getHours();
  var minute = date.getMinutes();
  return hour + ':' + minute;
};