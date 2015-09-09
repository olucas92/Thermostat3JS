describe("Thermostat", function(){

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

describe("by default", function(){

  it("thermostat should start at 20 degrees", function(){
    expect(thermostat.temperature).toEqual(20)
  });

});

describe("can change temperature", function(){

  it("thermostat can increase temperature", function(){
    thermostat.increaseTemp(5)
    expect(thermostat.temperature).toEqual(25)
  });

  it("thermostat can decrease temperature", function(){
    thermostat.decreaseTemp(3)
    expect(thermostat.temperature).toEqual(17)
  });
});

describe("minimum and maximum temperatures", function(){

  it("should have a maximum temperature of 32 degrees", function(){
    expect(thermostat.maxTemp).toEqual(32)
  });

  it("should have a minimum temperature of 10 degrees", function(){
    expect(thermostat.minTemp).toEqual(10)
  });

  it("should not be able to go above 32 degrees", function(){
    thermostat.increaseTemp(50)
    expect(thermostat.temperature).toEqual(32)
  });

  it("should not be able to go below 10 degrees", function(){
    thermostat.decreaseTemp(42)
    expect(thermostat.temperature).toEqual(10)
  });
});

describe("reset button", function(){

  it("should go back to 20 degrees after the reset button is pushed", function(){
    thermostat.increaseTemp(7)
    thermostat.resetButton()
    expect(thermostat.temperature).toEqual(20)
  });
});

describe("power save mode", function(){

  it("should not be able to go above 25 degrees when power save is on", function(){
    thermostat.powerSave()
    thermostat.increaseTemp(12)
    expect(thermostat.temperature).toEqual(25)
  });
});

describe("power usage colour co-ordination", function(){

  it("should be red when 25 degrees or over", function(){
    thermostat.increaseTemp(8)
    expect(thermostat.energyColour).toBe("high-usage")
  });

  it("should be green when between 18 and 24 degrees", function(){
    thermostat.increaseTemp(1)
    expect(thermostat.energyColour).toBe("medium-usage")
  });

  it("should be blue when 18 degrees or below", function(){
    thermostat.decreaseTemp(5)
    expect(thermostat.energyColour).toBe("low-usage")
  });
});

});