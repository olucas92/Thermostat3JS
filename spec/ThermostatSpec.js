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
});

});