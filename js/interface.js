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

var powerSavingMode = function(){
  ('#power-saving-mode').addClass(thermostat.powerSave())
}

var removePowerSavingMode = function(){
  ('#power-saving-mode').removeClass(thermostat.powerSave())
}

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

  $('.reset').on('click', function(){
    thermostat.resetButton();
    updateTemperature();
  });

  $('#power-save').on('click', function(){
    thermostat.powerSavingMode();
    thermostat.powerSave();
    updateTemperature();
  });
});