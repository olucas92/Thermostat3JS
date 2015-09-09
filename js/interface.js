var thermostat = new Thermostat();

var updateTemperature = function(){
  removeColour();
  updateColour();
  $('#temperature').text(thermostat.temperature)
};

var updateColour = function(){
  thermostat.setColour();
  $('#energy-colour').addClass(thermostat.energyColour)
};

var removeColour = function(){
  $('#energy-colour').removeClass();
};

$(document).ready(function(){
  updateTemperature();

  $('#increase-temperature').on('click', function(){
    thermostat.increaseTemp(1)
    updateTemperature();
  });

  $('#decrease-temperature').on('click', function(){
    thermostat.decreaseTemp(1)
    updateTemperature();
  });
});