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

  it("should have a maximum temperature of 32", function(){
    expect(thermostat.maxTemp).toEqual(32)
  });
});

});